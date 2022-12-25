
function TopBar() {
  return (
    <div className={TbSt.TopBarContainer}>
      <div className={TbSt.cryptovapeSection}>
      <div className={TbSt.Icon}></div>
        CryptoVapes
        
      </div>
     
      <div>
        <div className={TbSt.Icon}>
            {/* <Image 
                src={'/favicon.ico'}
                width={100}
                height={100}
            /> */}
        </div>
      </div>
    </div>
  )
}

export default TopBar
