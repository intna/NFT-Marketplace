import { ethers } from "hardhat"
import { expect } from "chai"
import { NFTMarketplace, NFTMarketplace__factory } from "../typechain-types"

describe("NFTMarketplace", () => {
  let NFTMarktplace: NFTMarketplace
  let NFTMarketplace__factory: NFTMarketplace__factory
  let listingPrice = ethers.parseEther("0.0025")

  /**deploy contracts */
  beforeEach(async function () {
    NFTMarketplace__factory = await ethers.getContractFactory("NFTMarketplace")
    NFTMarktplace = await NFTMarketplace__factory.deploy()
  })

  it("should return a new tokenId and create a MarketItem", async function () {
    const [owner, otherAccount] = await ethers.getSigners()

    // Prepare data
    const tokenURI = "https://my-nft-metadata.json"
    const price = ethers.parseEther("1.0")

    // Call createToken
    const tx = await NFTMarktplace.connect(owner).createToken(tokenURI, price, {
      value: listingPrice,
    })
    const receipt = await tx.wait()

    // Verify that the MarketItem is created correctly
    const marketItem = await NFTMarktplace.fetchMarketItem()
    expect(marketItem).to.have.lengthOf(1)
  })
})
