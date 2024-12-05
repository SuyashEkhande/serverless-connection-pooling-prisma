

# Serverless Connection Pooling with Cloudflare Workers and Prisma

## Overview

This repository provides a starter kit for developing **Cloudflare Workers** with **Connection Pooling** to a database using **Prisma**. It integrates **Prisma's Data Proxy** and the **Prisma Accelerate Extension** to ensure optimal database connections for serverless environments like Cloudflare Workers.

![Serverless Connection Pooling Chart](git_assets/images/diagram.png)


With this kit, you can quickly start building serverless applications that require reliable and scalable database connections, reducing the cold-start latency and making your serverless app more efficient.

## Features

- **Connection Pooling**: Uses Prisma's Data Proxy and Accelerate Extension to manage database connections in serverless environments.
- **Prisma Client**: Automatically generates Prisma Client optimized for serverless usage.
- **Cloudflare Workers**: Leverages Cloudflare Workers for serverless compute, providing an easy way to deploy your backend code.
- **Logging**: Logs incoming requests and stores them in a database.

## Prerequisites

Before you begin, ensure you have the following:

- **Cloudflare Account**: Create a Cloudflare account if you don't already have one.
- **Wrangler CLI**: Install [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler) for Cloudflare Workers.
- **Prisma Account**: Set up a Prisma account to use Prisma Accelerate for efficient database connection pooling.
- **Database**: Set up your database and configure the connection URL.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SuyashEkhande/serverless-pooling-cloudflare-prisma.git
   cd serverless-pooling-cloudflare-prisma
2.  **Install Dependencies**:
    
    `npm install` 
    
3. **Configure Environment Variables**:
    
     - **`.env` file**: Create an `.env` file in the root directory of the project and add your **direct database URL**.
        `DIRECT_URL="postgresql://username:password@host:port/database"` 
        
     - **`wrangler.toml` file**: Add the **Prisma Accelerate URL** (or Data Proxy URL) to the `wrangler.toml` file for serverless database connection pooling.
        
        ```bash
        [env]
        DATABASE_URL = "prisma://your-database-accelerate-url"
     
4. **Generate Prisma Client**:
    
    Run Prisma's generate command with the `--no-engine` flag to generate the Prisma Client suitable for Cloudflare Workers.
    
    `npx prisma generate --no-engine` 
    
5. **Deploy to Cloudflare**:
    
    `wrangler deploy` 
    
    This will deploy your Cloudflare Worker and start handling requests with connection pooling to your database.

## Contact
Feel free to reach out if you have any questions or suggestions.  
[![Email](https://img.shields.io/badge/Email-suyashekhande@gmail.com-blue?style=flat-square)](mailto:suyashekhande@gmail.com)  
[![GitHub](https://img.shields.io/badge/GitHub-SuyashEkhande-black?style=flat-square)](https://github.com/SuyashEkhande)

