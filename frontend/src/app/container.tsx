const Container = ({ children, classNames }: {children: React.ReactNode; classNames?: string;}) => {
  return (
    <div className={`max-w-4xl mx-auto w-lvw px-4 ${classNames}`}>{children}</div>
  )
}

export default Container