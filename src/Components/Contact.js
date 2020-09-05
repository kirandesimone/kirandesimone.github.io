import React, { useState } from 'react'
import { Keyframes, animated } from 'react-spring/renderprops'
import { Tooltip, Avatar, TextField, Button } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import delay from 'delay'
import '../App.css';




// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
    // Slots can take arrays/chains,
    peek: [{ x: 0, from: { x: -100 }, delay: 500 }, { x: -100, delay: 800 }],
    // single items,
    open: { delay: 0, x: 0 },
    // or async functions with side-effects
    close: async call => {
      await delay(400)
      await call({ delay: 0, x: -100 })
    },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
    peek: [
      { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
      { x: -100, opacity: 0, delay: 0 },
    ],
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: -100, opacity: 0, delay: 0 },
})


const items = [
    <Avatar style={{backgroundColor: '#E85A4F', color: 'white'}}>
        G
    </Avatar>,
    <TextField
        placeholder="Email"
    />,
    <TextField 
        multiline
        placeholder="Content"
        variant="outlined"
        rowsMax={3}
    />,
    <Button>

    </Button>
  ]



function Contact(props) {
    const [open, isOpen] = useState(undefined);
    const toggle = () => isOpen(!open);
    const state = 
        open === undefined
            ? 'peek'
            : open 
            ? 'open'
            : 'close';
    
    return (
        <div>
          <Tooltip title="Contact Me!" placement="left-start">
            <MenuOpenIcon
                fontSize="large"
                style={{color: "black"}}
                className="sidebar-toggle"
                onClick={toggle}
            />
          </Tooltip>
          <Sidebar native state={state}>
            {({ x }) => (
              <animated.div
                className="sidebar"
                style={{
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                }}>
                <Content
                  native
                  items={items}
                  keys={items.map((_, i) => i)}
                  reverse={!open}
                  state={state}>
                  {(item, i) => ({ x, ...props }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                        ...props,
                      }}>
                        <form>
                            <div className="form">
                                {item}
                            </div>
                        </form>
                        
                    </animated.div>
                  )}
                </Content>
              </animated.div>
            )}
          </Sidebar>
        </div>
    )
}

export default Contact;
