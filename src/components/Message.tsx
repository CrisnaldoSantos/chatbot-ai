import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { twMerge } from "tailwind-merge";

type RoleGPT = "system" | "user" | "assistant" | "function";

interface MessageProps {
  role: RoleGPT;
  children: ReactNode;
}

type RoleMessageInformation = {
  avatarAcronym: string;
  avatarUrl: string;
  header: string;
};

export function Message({ role, children }: MessageProps) {
  const userMessageInfo: RoleMessageInformation = {
    avatarAcronym: "CC",
    avatarUrl: "https://github.com/CrisnaldoSantos.png",
    header: "User:",
  };

  const assistantMessageInfo: RoleMessageInformation = {
    avatarAcronym: "IA",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWT_GU8Y55sKrJ8p_LogykN_MVyGxMaovwg&usqp=CAU",
    header: "IA:",
  };

  const isUser = role === "user";
  const roleInfo = isUser ? userMessageInfo : assistantMessageInfo;

  const { avatarAcronym, avatarUrl, header } = roleInfo;

  const messageContainerColorStyle = isUser
    ? "bg-zinc-300 rounded-l-3xl rounded-br-3xl"
    : "bg-slate-200 rounded-r-3xl rounded-bl-3xl";

  const messageContainerOrientationStyle = isUser
    ? "flex-row-reverse justify-start"
    : "justify-start";

  return (
    <div
      className={twMerge(
        "flex gap-3 text-sm text-slate-600 mb-4",
        messageContainerOrientationStyle
      )}
    >
      <Avatar>
        <AvatarFallback>{avatarAcronym}</AvatarFallback>
        <AvatarImage src={avatarUrl} />
      </Avatar>
      <p
        className={twMerge(
          "leaning-relaxed text-left p-3",
          messageContainerColorStyle,
          messageContainerOrientationStyle
        )}
      >
        <span className="block font-bold text-slate-700 ">{header}</span>
        {children}
      </p>
    </div>
  );
}
