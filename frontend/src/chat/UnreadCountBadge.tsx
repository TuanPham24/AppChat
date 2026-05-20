import { Badge } from "@/components/ui/badge";

const UnreadCountBadge = ({
  unreadCount,
}: {
  unreadCount: number;
}) => {
  return (
    <div className="absolute -top-1 -right-1 z-20">
      
      {/* vòng pulse phía sau */}
      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>

      {/* badge chính */}
      <Badge
        variant="destructive"
        className="
          relative
          size-5
          flex
          items-center
          justify-center
          p-0
          text-xs
          text-white
          border
          border-background
          bg-gradient-chat
          animate-bounce
        "
      >
        {unreadCount > 9 ? "9+" : unreadCount}
      </Badge>
    </div>
  );
};

export default UnreadCountBadge;