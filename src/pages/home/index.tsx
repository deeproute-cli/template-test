import React, { memo, useCallback } from 'react'
import {useHistory} from 'react-router-dom'

import {Button, Col, Row} from 'antd'
import {HomeWrapper} from './style'

export default memo(function Home() {
    const history = useHistory()
    const handleClickToAbout = useCallback(() => {
        history.push('/about')
    }, [history])
    return (
        <HomeWrapper>
            this is home page
            <Row>
                <Col>
                    <Button onClick={handleClickToAbout}>home</Button>
                </Col>
            </Row>
        </HomeWrapper>
    )
})
