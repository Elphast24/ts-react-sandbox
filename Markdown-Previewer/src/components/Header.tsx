type HeaderProp = {
    text: string
}

const Header = ({text}: HeaderProp) => {
  return (
    <div>{text}</div>
  )
}

export default Header