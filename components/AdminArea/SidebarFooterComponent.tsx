type SidebarFooterProps = {
  data: {
    username: string
    imageLink: string
  }
}

export default function SidebarFooterComponent({
  data: { username, imageLink },
}: SidebarFooterProps) {
  return (
    <div className="">
      {username}
      {imageLink}
    </div>
  )
}
