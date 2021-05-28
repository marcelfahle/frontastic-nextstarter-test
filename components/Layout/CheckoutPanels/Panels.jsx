import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { stepObject } from './stepObject'

import TinySlider from 'tiny-slider-react'
import './index.scss'

const Panels = forwardRef(({ steps, current, setCurrent, app, data, countries, isLoading = false }, ts) => {
    const goToPanel = (panel) => {
        ts.current.slider.goTo(panel)
        setCurrent(panel)
    }

    const updateSliderHeight = () => {
        ts.current.slider.refresh()
    }

    return (
        <div className='checkout-panels-slider relative min-h-full'>
            <TinySlider
                ref={ts}
                settings={{
                    nav: false,
                    loop: false,
                    touch: false,
                    controls: false,
                    autoHeight: true,
                }}
                onIndexChanged={(ev) => {
                    setCurrent(ev.index)
                }}
            >

                {steps.map(({ component: PanelComponent, name }, i) => {
                    return (
                        <PanelComponent
                            key={i}
                            name={name}
                            app={app}
                            data={data}
                            countries={countries}
                            updateHeight={() => {
                                updateSliderHeight()
                            }}
                            goToPanelIndex={panel => {
                                goToPanel(panel)
                            }}
                            goToNextPanel={() => {
                                goToPanel(current + 1)
                            }}
                            goToPreviousPanel={() => {
                                goToPanel(current - 1)
                            }}
                            isLoading={isLoading}
                        />
                    )
                })}

            </TinySlider>
        </div>
    )
})

Panels.propTypes = {
    app: PropTypes.object.isRequired,
    steps: PropTypes.arrayOf(stepObject),
    current: PropTypes.oneOf([0, 1, 2]).isRequired,
    setCurrent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
}

export default Panels
