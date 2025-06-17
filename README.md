<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">CineShelf</h3>

  <p align="center">
    A comprehensive gear booking and inventory management system
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />

  </p>

  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
    <a href="https://mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></a>
    <a href="https://next-auth.js.org/"><img src="https://img.shields.io/badge/NextAuth-9220D9?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next-Auth"></a>
    <a href="https://cloudinary.com/"><img src="https://img.shields.io/badge/cloudinary-0000ff?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary"></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#terminology">Terminology</a></li>
        <li><a href="#asset-categories">Asset Categories</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
      </ul>
    </li>
    <li><a href="#authorization">Authorization</a></li>
    <li><a href="#access-areas">Access Areas</a></li>
    <li><a href="#workflows">Workflows</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The Gear Booking System is a comprehensive inventory and booking management application designed to streamline the process of borrowing and lending equipment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies

- Authorization/Authentication: NextAuth
- Frontend/Backend: NextJS
- Database: MongoDB
- Image storage: Deployed with website on Vercel
- Web host: Vercel
- Data sync: Power automate for name re-linking
- Image hosting: Cloudinary
- Component library: ShadCN

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Terminology

- **Borrower:**
    - Anyone who can borrow gear, can be staff, student or admin
- **Approved lending staff:**
    - Lending staff are approved conditionally by admins

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Asset Categories

- **Consumables**
    - Items that diminish without being returned
        - These include printer ink
- **Extras**
    - Items that are returned but don't have unique identifiers
        - These include spare batteries, accessories and cables
- **Equipment**
    - Items that have unique identifiers and associated QR codes
        - These include cameras, lenses, lights, tripods and sound equipment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Requirements

This section of the document relates to the needs of the application and how they should work:

- Inventory of items with the following fields:
    - Serial Number, image/s, model number, model, brand, 
- Gear catalogue for people to browse

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REQUIRED SCHEMAS -->
## Required Schemas
- **Equipment**
- **Individual Items**
- **Activity Log**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORIZATION -->
## Authorization

### Types of users:

- **Admin (Mitch and I)**
    - Access to admin tools
    - Create, read, update and delete users
    - Create, read, update and delete gear
    - Assign gear to Borrowers and approve requests
    - HY login details

- **Important Updates**
    - Hidden user type for certain people to get emails and updates
    - Currently Tim Downward

- **Approved Lending Staff (ALS) (Approved by Mitch and I to borrow and lend gear)**
    - Create, read, update and delete gear
    - Assign gear to Borrowers and approve requests
    - HY login details

- **Borrowers (Students and Staff)**
    - No login required
    - Can make a booking request
    - Need to remember their own unique identifier

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACCESS AREAS -->
## Access Areas

- **Gear catalogue** (Requires borrower or higher authorization)
- **Admin area** (Requires Approved Lending staff or higher authorization)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- WORKFLOWS -->
## Workflows

### Borrowing

#### Borrower created booking requests
1. Borrower logs in with simple USER
2. Browse gear and add to cart
3. Create booking request - Can check status of booking request on /requests page
    - Request email is send to ALS+ and Borrower
        - ALS email contains link to admin panel to APPROVE, CHANGE or DENY
        - Borrower email contains link to view upcoming bookins on /requests page where they can cancel or edit
4. Lending staff will either [APPROVE, APPROVE WITH CHANGE or DENY]
5. Borrower, Lending staff and Admin will receive confirmation email containing details of booking, timeline, gear and notes

#### ALS or higher created booking requests
1. User logs in to admin tool panel
2. User assigns gear to Borrower and approves

### Checkout

#### ALS or higher on the day checkout
1. User assigns specific items to Borrower
2. Manually choose or scan gear to be associated with booking


<p align="right">(<a href="#readme-top">back to top</a>)</p>
