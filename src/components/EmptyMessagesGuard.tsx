import Image from "next/image";
import Empty from "@/assets/empty.svg";
import { ReactNode } from "react";

interface EmptyMessagesGuardProps {
  children: ReactNode;
  totalMessages: number;
}
export function EmptyMessagesGuard({
  totalMessages,
  children,
}: EmptyMessagesGuardProps) {
  const isEmpty = totalMessages === 0;
  if (isEmpty) {
    return <Image src={Empty} alt="No messages" objectFit="contain" fill />;
  }
  return <>{children}</>;
}
