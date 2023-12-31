# Ready Player DAO - Data Dashboard Project

![Project Logo](https://example.com/project_logo.png)

## Overview

This project aims to create a data dashboard for Ready Player DAO, an autonomous decentralized organization committed to leveraging the collective power of gaming to create equity for all. The dashboard will aggregate key metrics associated with Ready Player DAO's investments, including data from smart contracts, game tokens, user traction, and more.

## Requirements

- Python 3.x
- Node.js (for React.js frontend, planned but not implemented yet)
- Thirdweb SDK (for smart contract interactions, planned but not implemented yet)

## Installation

1. Clone this repository to your local machine.
2. Install Python 3.x and Node.js on your system if not already installed.
3. Install the required Python dependencies by running `pip install -r requirements.txt`.
4. Install the required Node.js dependencies by navigating to the frontend directory and running `npm install`.

## Configuration

1. Create a copy of the `.env.example` file and rename it to `.env`.
2. Update the environment variables in the `.env` file with your private key, wallet address, QuickNode API URL, EtherScan API URL, and CoinGecko API URL.

## APIs Used

- [EtherScan API](https://docs.etherscan.io/api-endpoints/accounts): Used for retrieving contract data, transactions, and other related information from the Ethereum blockchain.

  **Examples:**

  - Get a list of 'normal' transactions by address:

    ```
    https://api.etherscan.io/api
    ?module=account
    &action=txlist
    &address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC
    &startblock=0
    &endblock=99999999
    &page=1
    &offset=10
    &sort=asc
    &apikey=YourApiKeyToken
    ```

  - Get a list of 'internal' transactions by address:
    ```
    https://api.etherscan.io/api
    ?module=account
    &action=txlistinternal
    &address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
    &startblock=0
    &endblock=2702578
    &page=1
    &offset=10
    &sort=asc
    &apikey=YourApiKeyToken
    ```

  Replace `YourApiKeyToken` with your own EtherScan API key and adjust the `address` and other parameters according to your needs.

- [CoinGecko API](https://www.coingecko.com/en/api/documentation): Used for obtaining real-time and historical cryptocurrency market data, including the value of gaming tokens and other valuable information.

  **Examples:**

  - List all supported coin IDs, names, and symbols:
    ```
    https://api.coingecko.com/api/v3/coins/list
    ```
  - Get current data for a specific coin (e.g., Axie Infinity):
    ```
    https://api.coingecko.com/api/v3/coins/axie-infinity
    ```

  You can use the information provided by CoinGecko to retrieve price data and other details about gaming tokens and other valuable assets.

Please note that these examples are for illustration purposes. Make sure to replace relevant values with the appropriate information to retrieve specific data in your project.

## Data Collection

The project will utilize the EtherScan API to fetch data related to smart contracts, transactions, and other blockchain-specific information. Additionally, the CoinGecko API will be utilized to fetch the value of gaming tokens and other relevant market data.

## Database

The project will use SQL or ORM to store and manage the aggregated data collected from the APIs. The database schema and design have been outlined, and initial tests have been conducted.

## Development Progress

As of now, the project is still in the planning and research phase. Technical planning and discussions on technology choices, timelines, and further research are ongoing. The implementation of the React.js frontend and Thirdweb SDK for smart contract interactions is planned but not yet implemented.

## Contributing

Contributions to this project are welcome. If you have any suggestions, find issues, or want to add new features, feel free to create a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Note**: The README is currently a high-level overview of the project. As you make progress, you can update and add more sections to provide a more comprehensive guide for other developers who may collaborate on the project or use the data dashboard in the future. You can also add details about the project's architecture, data visualization, deployment instructions, and any other relevant information as it becomes available. Remember to keep it organized, easy to read, and up-to-date as you continue developing the project.
