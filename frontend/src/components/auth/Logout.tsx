import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router";

export function Logout() {
    const {signOut} = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = async() =>{
        try {
            await signOut();
            navigate("/signin");
        } catch (error) {
            console.error(error)
        }
    }
    
    
    return (
        <Button onClick={handleLogout}>Đăng xuất</Button>
    );
}