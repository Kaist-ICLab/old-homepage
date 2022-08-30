const SocialIcon = ({ href, children }) => {
  return (
    <a
      href={href}
      style={{
        width: '24px',
        height: '24px',
      }}
    >
      {children}
    </a>
  )
}

export default SocialIcon
