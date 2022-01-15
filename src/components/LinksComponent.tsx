const LinksComponent = () => {
  const links = [
    {
      href: "https://github.com/enricovettori93",
      icon: "fab fa-github"
    }, {
      href: "mailto:enrico.vettori93@gmail.com",
      icon: "far fa-envelope"
    }, {
      href: "https://www.instagram.com/enricovettori93/",
      icon: "fab fa-instagram"
    }
  ];

  return (
    <div className={"flex justify-center items-center"}>
      {
        links.map((link) => (<a className={"mx-2 text-xl"} target={"_blank"} href={link.href}><i className={link.icon}></i></a>))
      }
    </div>
  )
}

export default LinksComponent;