import React from 'react'
import { Modal } from 'antd';
import Constants from './../../constants'
import './alertpop.scss'
export const AlertPop = (errorLocation,errorMsg,sourceName) => {
    const info = (errorLocation, errorMsg, sourceName) =>{
        Modal.info({
            content: (
              <div>
                  <p>{Constants.ALERTTITLE}</p>
                    <p>{sourceName}: {errorLocation}</p>
                  <p>{errorMsg}</p>
              </div>
            ),
            icon: '',
            okText: 'Close',
            onOk :false,
            width:600
          })
    }
    return (
        <div>
            {info(errorLocation,errorMsg, sourceName)}
        </div>
    )
}
export default AlertPop