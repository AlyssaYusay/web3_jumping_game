function loadImagesOfMintedNfts() {
  for (let i = 1; i <= 10; i++) {
    if (localStorage.getItem(i.toString())) {
      console.log(`element with id ${i} is minted`);
      const nft1 = document.getElementById(i);
      const att = document.createAttribute("style");
      att.value = `content:url(./skins/${i}.jpg)`;
      nft1.setAttributeNode(att);
    }
  }
}

async function mintOrSelect(element) {
  if (signer == undefined) {
    alert("Connect your metamask");
  }
  if (window.nftScore < 1) {
    alert("you need score to mint nft");
    return;
  }
  const skinsContractAddress = "0xeA917733cF4028B90b6229273446C057Bc681164";
  const skinsCollectionAbi = [
    "function mint(string memory tokenURI) public returns (uint256)",
  ];
  const skinsContract = new ethers.Contract(
    skinsContractAddress,
    skinsCollectionAbi,
    provider
  );

  if (localStorage.getItem(element.id) == null) {
    const cidOfJsonFiles = "QmcuaiLwmwr2s91VJwe5jXmm4JzocS3h6JtPviX7SKsLJW";
    const tokenURI =
      `https://ipfs.io/ipfs/${cidOfJsonFiles}/` + element.id + ".json";
    const tx = await skinsContract.connect(signer).mint(tokenURI);
    await tx.wait();

    localStorage.setItem(element.id, 1);
    // minted an NFT...

    loadImagesOfMintedNfts();
  } else {
    //  selected an NFT as a skin...
    localStorage.setItem("currentSkin", `./skins/${element.id}.jpg`);
  }
}

let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

async function connectMetamask() {
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  console.log("Account address s:", await signer.getAddress());
}
