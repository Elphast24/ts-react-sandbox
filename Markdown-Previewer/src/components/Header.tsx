type HeaderProp = {
    text: string
}

import DocumentLayoutCenterIcon from '@iconify-react/uim/document-layout-center';
import HomeBoldDuotoneIcon from '@iconify-react/solar/home-bold-duotone';
import DocumentAddBoldDuotoneIcon from '@iconify-react/solar/document-add-bold-duotone';
import WalletMoneyBoldDuotoneIcon from '@iconify-react/solar/wallet-money-bold-duotone';
import './styles/navbar.styles.css'


const Header = ({text}: HeaderProp) => {
  return (
    <>
        <div className="nav">
            <nav>
                <div className='logo'>
                    <DocumentLayoutCenterIcon height="2em" />
                    <span>MP</span>
                </div>
                <ul>
                    <li><a href="#"><HomeBoldDuotoneIcon height="1em" />Home</a></li>
                    <li><a href="#preview"><DocumentAddBoldDuotoneIcon height="1em" />Preview</a></li>
                    <li><a href="#donate"><WalletMoneyBoldDuotoneIcon height="1em" />Donate</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header