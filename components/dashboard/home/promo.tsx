import { Button } from "@/components/ui/button";
import {Pencil } from "lucide-react"

const Promo = () => {
    return ( <>
    <div className="flex justify-center gap-6">
        <Button className="bg-orange-400 hover:bg-orange-300"><Pencil /> Create promotion code</Button>
        <Button variant="outline" className="border-orange-400">View support code</Button>
    </div>
    </> );
}
 
export default Promo;