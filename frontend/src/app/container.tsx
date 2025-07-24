const Container = ({ children, classNames }: {children: React.ReactNode; classNames?: string;}) => {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 ${classNames}`}>{children}</div>
  )
}

export default Container