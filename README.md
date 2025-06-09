<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="./app/public/icon.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# BOUTIQUE.GIT

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/Scott-Duby/Boutique?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/Scott-Duby/Boutique?estyle=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Scott-Duby/Boutique?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Scott-Duby/Boutique?style=default&color=0080ff" alt="repo-language-count">
<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=prisma&logoColor=white" alt="Prisma">
<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
	- [Project Index](#project-index)
- [Getting Started](#getting-started)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview



---

## Features

<code>
> Zustand
> Prisma 
> React + Vite
> Ratelimiting
> Docker
</code>

---

## Project Structure

```sh
└── Boutique.git/
	├── LICENSE.md
	├── README.md
	├── app
	│   ├── .dockerignore
	│   ├── .gitignore
	│   ├── Dockerfile
	│   ├── components.json
	│   ├── eslint.config.js
	│   ├── index.html
	│   ├── package.json
	│   ├── public
	│   ├── src
	│   ├── tailwind.config.js
	│   ├── tsconfig.app.json
	│   ├── tsconfig.json
	│   ├── tsconfig.node.json
	│   └── vite.config.ts
	├── compose.yaml
	├── package.json
	└── server
		├── .dockerignore
		├── .gitignore
		├── .prettierignore
		├── .prettierrc
		├── Dockerfile
		├── eslint.config.mjs
		├── package.json
		├── prisma
		├── src
		├── tsconfig.json
		├── tslint.json
		└── yarn.lock
```

### Project Index

<details open>
	<summary><b><code>BOUTIQUE</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/package.json'>package.json</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/compose.yaml'>compose.yaml</a></b></td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- app Submodule -->
	<details>
		<summary><b>app</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ app</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/tsconfig.node.json'>tsconfig.node.json</a></b></td>
					<td>Config for typescript</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/index.html'>index.html</a></b></td>
					<td>HTML entry-point</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td>Config for tailwind</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/tsconfig.app.json'>tsconfig.app.json</a></b></td>
					<td>Config for app build entrypoint</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/Dockerfile'>Dockerfile</a></b></td>
					<td>Config for Docker</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/package.json'>package.json</a></b></td>
					<td>Config for node</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/components.json'>components.json</a></b></td>
					<td>Config for ShadCN</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/tsconfig.json'>tsconfig.json</a></b></td>
					<td>Config for typescript</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/eslint.config.js'>eslint.config.js</a></b></td>
					<td>Config for ESLint</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/vite.config.ts'>vite.config.ts</a></b></td>
					<td>Config for vite</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/main.tsx'>main.tsx</a></b></td>
							<td>Entry for React/Vite</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/utils.ts'>utils.ts</a></b></td>
							<td>Provides merger utils for tailwind</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/index.css'>index.css</a></b></td>
							<td>styles for tailwind / app-wide styles</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
							<td>Types for Vite</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/routeTree.gen.ts'>routeTree.gen.ts</a></b></td>
							<td>**GENERATED**| router logic</td>
						</tr>
					</table>
					<!-- types Submodule -->
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.src.types</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/types/Item.ts'>Item.ts</a></b></td>
									<td>Types for Item</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/types/Bin.ts'>Bin.ts</a></b></td>
									<td>Types for Bin</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- components Submodule -->
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.src.components</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/Navbar.tsx'>Navbar.tsx</a></b></td>
									<td>Navbar Component</td>
								</tr>
							</table>
							<!-- Charts Submodule -->
							<details>
								<summary><b>Charts</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.components.Charts</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/Charts/Chart.tsx'>Chart.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/Charts/BinBarChart.tsx'>BinBarChart.tsx</a></b></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- ItemTable Submodule -->
							<details>
								<summary><b>ItemTable</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.components.ItemTable</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/ItemTable.tsx'>ItemTable.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/Filters.tsx'>Filters.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/ItemTableHeader.tsx'>ItemTableHeader.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/TableSkeleton.tsx'>TableSkeleton.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/ItemTableBody.tsx'>ItemTableBody.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/TablePaginator.tsx'>TablePaginator.tsx</a></b></td>
										</tr>
									</table>
									<!-- Cells Submodule -->
									<details>
										<summary><b>Cells</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ app.src.components.ItemTable.Cells</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/Cells/BulkCreate.tsx'>BulkCreate.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/Cells/EditableCell_SOLD.tsx'>EditableCell_SOLD.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/Cells/EditableCell_NAME.tsx'>EditableCell_NAME.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/ItemTable/Cells/EditableCell_BIN.tsx'>EditableCell_BIN.tsx</a></b></td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<!-- BinEditor Submodule -->
							<details>
								<summary><b>BinEditor</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.components.BinEditor</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/BinEditor/EditBin.tsx'>EditBin.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/BinEditor/BinManager.tsx'>BinManager.tsx</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/BinEditor/CreateBin.tsx'>CreateBin.tsx</a></b></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- @shadcn Submodule -->
							<details>
								<summary><b>@shadcn</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.components.@shadcn</b></code>
									<!-- ui Submodule -->
									<details>
										<summary><b>ui</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ app.src.components.@shadcn.ui</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/pagination.tsx'>pagination.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/popover.tsx'>popover.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/sheet.tsx'>sheet.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/label.tsx'>label.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/sonner.tsx'>sonner.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/accordion.tsx'>accordion.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/drawer.tsx'>drawer.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/switch.tsx'>switch.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/radio-group.tsx'>radio-group.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/dialog.tsx'>dialog.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/badge.tsx'>badge.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/table.tsx'>table.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/button.tsx'>button.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/checkbox.tsx'>checkbox.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/select.tsx'>select.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/input.tsx'>input.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/skeleton.tsx'>skeleton.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/context-menu.tsx'>context-menu.tsx</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/components/@shadcn/ui/form.tsx'>form.tsx</a></b></td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- Hooks Submodule -->
					<details>
						<summary><b>Hooks</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.src.Hooks</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/getItemsForTable.ts'>getItemsForTable.ts</a></b></td>
								</tr>
							</table>
							<!-- Store Submodule -->
							<details>
								<summary><b>Store</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.Hooks.Store</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Store/UseBoutiqueStore.ts'>UseBoutiqueStore.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Mutations Submodule -->
							<details>
								<summary><b>Mutations</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ app.src.Hooks.Mutations</b></code>
									<!-- Bins Submodule -->
									<details>
										<summary><b>Bins</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ app.src.Hooks.Mutations.Bins</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Bins/useDeleteBin.ts'>useDeleteBin.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Bins/useCreateBin.ts'>useCreateBin.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Bins/useEditBinName.ts'>useEditBinName.ts</a></b></td>
												</tr>
											</table>
										</blockquote>
									</details>
									<!-- Items Submodule -->
									<details>
										<summary><b>Items</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ app.src.Hooks.Mutations.Items</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Items/useBulkCreate.ts'>useBulkCreate.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Items/useUpdateSold.ts'>useUpdateSold.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Items/useUpdateItemName.ts'>useUpdateItemName.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Items/useDeleteItem.ts'>useDeleteItem.ts</a></b></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Hooks/Mutations/Items/useEditItemBin.ts'>useEditItemBin.ts</a></b></td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- lib Submodule -->
					<details>
						<summary><b>lib</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.src.lib</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/lib/loadTableState.ts'>loadTableState.ts</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/lib/utils.ts'>utils.ts</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/lib/createItemTableMeta.ts'>createItemTableMeta.ts</a></b></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Routes Submodule -->
					<details>
						<summary><b>Routes</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.src.Routes</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Routes/settings.tsx'>settings.tsx</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Routes/index.tsx'>index.tsx</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Routes/__root.tsx'>__root.tsx</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Routes/data.tsx'>data.tsx</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/app/src/Routes/bins.tsx'>bins.tsx</a></b></td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- server Submodule -->
	<details>
		<summary><b>server</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ server</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/Dockerfile'>Dockerfile</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/.prettierignore'>.prettierignore</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/package.json'>package.json</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/tslint.json'>tslint.json</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/.prettierrc'>.prettierrc</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/tsconfig.json'>tsconfig.json</a></b></td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				</tr>
			</table>
			<!-- prisma Submodule -->
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ server.prisma</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/prisma/schema.prisma'>schema.prisma</a></b></td>
							<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
						</tr>
					</table>
					<!-- migrations Submodule -->
					<details>
						<summary><b>migrations</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ server.prisma.migrations</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- 20250515230735_migrate_init Submodule -->
							<details>
								<summary><b>20250515230735_migrate_init</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ server.prisma.migrations.20250515230735_migrate_init</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/prisma/migrations/20250515230735_migrate_init/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- 20250517232211_add_timestamps Submodule -->
							<details>
								<summary><b>20250517232211_add_timestamps</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ server.prisma.migrations.20250517232211_add_timestamps</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/prisma/migrations/20250517232211_add_timestamps/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ server.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/logger.ts'>logger.ts</a></b></td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/index.ts'>index.ts</a></b></td>
						</tr>
					</table>
					<!-- utils Submodule -->
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ server.src.utils</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/utils/BinPayloadBuilder.ts'>BinPayloadBuilder.ts</a></b></td>
									<td style='padding: 8px;'>Builds response messages for server</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/utils/ItemPayloadBuilder.ts'>ItemPayloadBuilder.ts</a></b></td>
									<td style='padding: 8px;'>Builds response messages for server</code></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/utils/FieldTypes.ts'>FieldTypes.ts</a></b></td>
									<td style='padding: 8px;'>Defines types</code></td>
								</tr>
							</table>
							<!-- Interfaces Submodule -->
							<details>
								<summary><b>Interfaces</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ server.src.utils.Interfaces</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/utils/Interfaces/ItemReturnMessage.ts'>ItemReturnMessage.ts</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/utils/Interfaces/BinReturnMessage.ts'>BinReturnMessage.ts</a></b></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- db Submodule -->
					<details>
						<summary><b>db</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ server.src.db</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/db/prisma.ts'>prisma.ts</a></b></td>
									<td style='padding: 8px;'>Prisma Init</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Controllers Submodule -->
					<details>
						<summary><b>Controllers</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ server.src.Controllers</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Controllers/bins.controller.ts'>bins.controller.ts</a></b></td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Controllers/items.controller.ts'>items.controller.ts</a></b></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- Routes Submodule -->
					<details>
						<summary><b>Routes</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ server.src.Routes</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/RouteHandlerV1.ts'>RouteHandlerV1.ts</a></b></td>
								</tr>
							</table>
							<!-- Bins Submodule -->
							<details>
								<summary><b>Bins</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ server.src.Routes.Bins</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Bins/bins.router.get.ts'>bins.router.get.ts</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Bins/bins.router.ts'>bins.router.ts</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Bins/bins.router.patch.ts'>bins.router.patch.ts</a></b></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Items Submodule -->
							<details>
								<summary><b>Items</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ server.src.Routes.Items</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Items/items.router.get.ts'>items.router.get.ts</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Items/items.router.ts'>items.router.ts</a></b></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/Scott-Duby/Boutique.git/blob/master/server/src/Routes/Items/items.router.patch.ts'>items.router.patch.ts</a></b></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm, Yarn
- **Container Runtime:** Docker

### Installation

Build Boutique.git from the source and intsall dependencies:

1. **Clone the repository:**

	```sh
	❯ git clone https://github.com/Scott-Duby/Boutique.git
	```

2. **Navigate to the project directory:**

	```sh
	❯ cd Boutique.git
	```

3. **Install the dependencies:**


 [[docker][docker-shield]][docker-link]
	<!-- REFERENCE LINKS -->
	<!-- [docker-shield]: https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white -->
	<!-- [docker-link]: https://www.docker.com/ -->

	**Using [docker](https://www.docker.com/):**

	```sh
	❯ docker build -t Scott-Duby/Boutique.git .
	```
<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

	<!-- [![yarn][yarn-shield]][yarn-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [yarn-shield]: None -->
	<!-- [yarn-link]: None -->

	**Using [yarn](None):**

	```sh
	❯ yarn'
	```

## Create your docker environment
 > Use the compose example to help format your file [compose.example.yaml]

## Run the Project

You can run the project using one of the following methods:

### 🐳 Using [Docker](https://www.docker.com/)
```sh
docker compose build
docker compose up
```
### 📦 Using npm
```sh
npm install
npm start
```

[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=yarn&logoColor=white)](https://yarnpkg.com/)

### 🧶 Using yarn
```sh
yarn
yarn start
```
---

## Roadmap

- [X] **`Task 1`**: <strike>Ratelimits.</strike>
- [ ] **`Task 2`**: Settings.
- [ ] **`Task 3`**: Theming.
- [ ] **`Task 4`**: Posh Scraper

---

## Contributing

- **🐛 [Report Issues](https://github.com/Scott-Duby/Boutique.git/issues)**: Submit bugs found or log feature requests for the `Boutique.git` project.
- **💡 [Submit Pull Requests](https://github.com/Scott-Duby/Boutique.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Scott-Duby/Boutique.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>


---

## License

Boutique is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [MIT](https://choosealicense.com/licenses/mit) file.
