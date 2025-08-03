# The Web3 Masterclasses Set Up!

Welcome to the Web3 Masterclasses Setup! This repository is designed to provide you with everything you need to start building on the Algorand blockchain.

⚠️ **Warning, Fork the original repo [OG Repo](https://github.com/Ganainmtech/Algorand-Web3-Masterclasses-POC).**

📘 **New here?** Check out our [Reference Guide](https://docs.google.com/document/d/19FHGLijTwKivy14KpNYaXVLxEI_Yo97ooaGj6CxZ1fA/edit?usp=sharing)

It includes prompts, setup instructions, and AI tips to help you follow along with the Web3 Masterclasses!

## 🌟 How To Get Started Instructions

### **Fork the Repo:**

To create your own copy of this repository:

a. **Go to the GitHub Repository:**
   - Navigate to the main page which is the current one your on.

b. **Click the "Fork" Button:**
   - In the top-right corner of the page, click the **Fork** button. This will create a copy of the repository under your GitHub account.

c. **Wait for the Forking Process to Complete:**
   - GitHub will take a few moments to create the fork. Once complete, you’ll be redirected to your newly created fork.



https://github.com/user-attachments/assets/92e746e1-3143-4769-8a5a-1339e4bd7a14



## 🚀 Start with Codespaces
This is the fastest way to get up and running!

1. **Create a Codespace:**

   - Click the green "Code" button at the top right of your forked repo.
   - Select "Create codespace on main".
   - Once your Codespace is fully loaded, you are ready to go!

2. **Start Coding:**
   - Run the command ```algokit init```


https://github.com/user-attachments/assets/ee3fda3e-f4fe-4190-867b-0a626f0eb099



## 🚀 Project Setup
After the `algokitinit` command do the following steps,

1. **.env Setup**

   - Your .env shall look like this, you can copy paste from here as well.
```
# # ======================
# # LocalNet configuration
# # uncomment below to use
# # ======================

# VITE_ENVIRONMENT=local

# # Algod
# VITE_ALGOD_TOKEN=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
# VITE_ALGOD_SERVER=http://localhost
# VITE_ALGOD_PORT=4001
# VITE_ALGOD_NETWORK=localnet

# # Indexer
# VITE_INDEXER_TOKEN=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
# VITE_INDEXER_SERVER=http://localhost
# VITE_INDEXER_PORT=8980

# # KMD
# # Please note:
# # 1. This is only needed for LocalNet since
# # by default KMD provider is ignored on other networks.
# # 2. AlgoKit LocalNet starts with a single wallet called 'unencrypted-default-wallet',
# # with heaps of tokens available for testing.
# VITE_KMD_TOKEN=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
# VITE_KMD_SERVER=http://localhost
# VITE_KMD_PORT=4002
# VITE_KMD_WALLET="unencrypted-default-wallet"
# VITE_KMD_PASSWORD=""

# # ======================
# # TestNet configuration:
# # uncomment below to use
# # ======================

 VITE_ENVIRONMENT=local

# # Algod
 VITE_ALGOD_TOKEN=""
 VITE_ALGOD_SERVER="https://testnet-api.algonode.cloud"
 VITE_ALGOD_PORT=""
 VITE_ALGOD_NETWORK="testnet"

 # Indexer
 VITE_INDEXER_TOKEN=""
 VITE_INDEXER_SERVER="https://testnet-idx.algonode.cloud"
 VITE_INDEXER_PORT=""


# # ======================
# # MainNet configuration:
# # uncomment below to use
# # ======================

# VITE_ENVIRONMENT=production

# # Algod
# VITE_ALGOD_TOKEN=""
# VITE_ALGOD_SERVER="https://mainnet-api.algonode.cloud"
# VITE_ALGOD_PORT=""
# VITE_ALGOD_NETWORK="mainnet"

# # Indexer
# VITE_INDEXER_TOKEN=""
# VITE_INDEXER_SERVER="https://mainnet-idx.algonode.cloud"
# VITE_INDEXER_PORT=""
```

2. **src/Home.tsx Setup**
   
   - After that paste the prompt given in the reference guide and the code in src/Home.tsx into Chatgpt, then paste the Chatgpt output back into src/Home.tsx.**
  


## 🌟 Final Result

   - Final result shall look something like this.

<img width="1366" height="641" alt="image" src="https://github.com/user-attachments/assets/bdeb9484-6bb2-40d8-9c8b-4bf27e372d74" />
