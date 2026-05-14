import {Badge} from "@/components/ui/badge"
const UnreadCountBadge = ({unreadCount}:{unreadCount:number}) => {
    return (
        <div className="pulse-ring absolute -top-1 z-20 -right-1">
            <Badge variant="destructive" className="size-5 flex items-center justify-center p-0 text-xs bg-gradient-chat border border-background">
                {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
        </div>
    )
}

export default UnreadCountBadge