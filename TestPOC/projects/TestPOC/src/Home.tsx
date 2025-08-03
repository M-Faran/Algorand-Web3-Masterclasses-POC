// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [claimed, setClaimed] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => setOpenWalletModal(!openWalletModal)
  const toggleDemoModal = () => setOpenDemoModal(!openDemoModal)

  const handleClaim = () => {
    setClaimed(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-300 via-cyan-300 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">MasterPass 🎟️</span>
        </h1>
        <p className="text-lg text-gray-600">
          Your exclusive ticket to a one-of-a-kind Web3 experience.
        </p>

        <div className="flex flex-col gap-4 items-center justify-center mt-4">
          <button
            data-test-id="connect-wallet"
            className="btn btn-primary w-full max-w-xs"
            onClick={toggleWalletModal}
          >
            Connect Wallet
          </button>

          {activeAddress && (
            <>
              <button
                data-test-id="transactions-demo"
                className="btn btn-secondary w-full max-w-xs"
                onClick={toggleDemoModal}
              >
                Send Payment
              </button>

              <button
                className="btn bg-green-500 hover:bg-green-600 text-white w-full max-w-xs"
                onClick={handleClaim}
              >
                Get Your MasterPass
              </button>
            </>
          )}
        </div>

        {claimed && (
          <div className="mt-4 text-green-700 font-semibold">
            🎉 You've claimed your ticket!
          </div>
        )}

        <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
        <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
      </div>
    </div>
  )
}

export default Home
