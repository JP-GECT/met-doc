import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent = () => {
  return (
    <Avatar>
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarImage src="" />
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
