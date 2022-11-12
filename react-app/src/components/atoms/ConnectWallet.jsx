import React from 'react';
import Overlay from './Overlay';
import { ReactComponent as Close} from './../../assets/icons/close.svg';
import { ReactComponent as MetamaskIcon} from './../../assets/icons/metamask-ico.svg';
import { ReactComponent as WalletConnectIcon} from './../../assets/icons/walletconnect-ico.svg';
import { ReactComponent as CaretRight} from './../../assets/icons/caret_right.svg';
import styles from './ConnectWallet.module.css'
function ConnectWallet(props) {
    return (
        <Overlay>
            <div className={styles.container}>
                <header>
                    <h3>Connect Wallet</h3>
                    <span
                    onClick={() => {
                        props.root.unmount()
                    }}
                    >
                        <Close />
                    </span>
                </header>
                <div className={styles.wrapper}>
                    <span>Choose your preferred wallet:</span>
                    <div className={styles.wallets}>
                        <div>
                            <span>
                                <MetamaskIcon />
                            </span>
                            <span>
                                Metamask
                            </span>
                            <span>
                                <CaretRight />
                            </span>
                        </div>
                        <div>
                            <span>
                                <WalletConnectIcon />
                            </span>
                            <span>
                                Walletconnect
                            </span>
                            <span>
                                <CaretRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    );
}

export default ConnectWallet;