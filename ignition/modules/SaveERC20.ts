import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xD322bfaEf271b93e22371A1652D8e921DD1A7586";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed Web3CXI: 0xD322bfaEf271b93e22371A1652D8e921DD1A7586
// Deployed SaveERC20: 0x938cbDBbCd0e50E3ee01c913B53BD73FF2E4c610
