import {
    DynamicContextProvider,
    DynamicWidget,
  } from "@dynamic-labs/sdk-react-core";
  
  import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
  
  
  export default function SignUpLogin() {
    return (
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "e5e636ea-f8a8-4447-97dd-3830d5d1a600",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    );
  };