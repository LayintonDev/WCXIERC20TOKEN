import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xD322bfaEf271b93e22371A1652D8e921DD1A7586";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x938cbDBbCd0e50E3ee01c913B53BD73FF2E4c610";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
      const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance before withdrawal :::", contractBalanceBeforeWithdrawal);
      const withDrawalAmount = ethers.parseUnits("100", 18);
      const withdrawalTx = await saveERC20.withdraw(withDrawalAmount);

    console.log("WITHDRAWAL RECEIPT :::", withdrawalTx);

    withdrawalTx.wait();

    const contractBalanceAfterWithDrawal = await saveERC20.getContractBalance();

    console.log("Contract balance after withdrawal :::", contractBalanceAfterWithDrawal);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
