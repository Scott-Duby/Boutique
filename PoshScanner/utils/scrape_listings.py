from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time
from functools import lru_cache

@lru_cache()
def scrape_poshmark_with_selenium(username, getOnlyUnsold):
    url = f"https://poshmark.com/closet/{username}"

    options = Options()
    options.add_argument("--headless")  # Run in background
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    driver = webdriver.Chrome(options=options)

    try:
        driver.get(url)

        SCROLL_PAUSE_TIME = 1.5
        last_height = driver.execute_script("return document.body.scrollHeight") # get container height

        retries = 0
        max_retries = 10

        while retries < max_retries:
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);") # scroll to bottom
            time.sleep(SCROLL_PAUSE_TIME)

            new_height = driver.execute_script("return document.body.scrollHeight") # get new height
            if new_height == last_height:
                retries += 1
            else:
                retries = 0
                last_height = new_height

        # Parse with BeautifulSoup after full scroll
        soup = BeautifulSoup(driver.page_source, "html.parser")
        listings = []

        cards = soup.select(".card")
        for card in cards:
            name = card.select_one(".item__details a") # Item Name
            details = card.select_one(".item__details") # Item Details
            brand = card.select_one(".tile__details__pipe__brand") # Item Brand
            sold_badge = card.select_one(".tile__covershot i span") # Sold?
            web_url = card.select_one("a").get("href") # Sold?


            name_text = name.text.strip() if name else ""
            details_text = details.text.strip() if details else ""
            brand_text = brand.text.strip() if brand else ""
            isSold = sold_badge is not None
            isNWT = "NWT" in card.text # Check if item is NWT
            web_url = web_url if web_url else ""
            size = ""
            if "Size:" in details_text:
                try:
                    size = details_text.split("Size:")[1].split()[0]
                except IndexError:
                    pass

            listings.append({
                "name": name_text,
                "size": size,
                "brand": brand_text,
                "isSold": isSold,
                "isNWT": isNWT,
                "web_url": "https://poshmark.com" + web_url
            })
        if(getOnlyUnsold == True):
            listings = [listing for listing in listings if not listing["isSold"]]
        return listings

    finally:
        driver.quit()