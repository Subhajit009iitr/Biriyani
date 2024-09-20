import { IDKitWidget, VerificationLevel, ISuccessResult, verifyCloudProof } from '@worldcoin/idkit'
import BackendClient from '../BackendClient';

export default function UserVerify() {
    const handleVerify = async (proof) => {
        try {
            const res = await BackendClient.post("/api/verify", proof, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (res.status !== 200) {
                throw new Error("Verification failed.");
            }
    
            // Handle successful verification here
        } catch (error) {
            console.error(error.message);
            // Handle error appropriately
        }
    };
    const onSuccess = () => {
        // This is where you should perform any actions after the modal is closed
        // Such as redirecting the user to a new page
        window.location.href = "/";
    };
    
    
    return (
        <div>
            <IDKitWidget
                app_id="app_staging_bc5a5eb38834b5595b79f3b6691d8c20" // obtained from the Developer Portal
                action="verify-id" // obtained from the Developer Portal
                onSuccess={onSuccess} // callback when the modal is closed
                handleVerify={handleVerify} // callback when the proof is received
                verification_level={VerificationLevel.Orb}
            >
                {({ open }) =>
                    // This is the button that will open the IDKit modal
                    <button onClick={open}>Verify with World ID</button>
                }
            </IDKitWidget>

        </div>
    );
};