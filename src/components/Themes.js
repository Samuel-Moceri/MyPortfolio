//Dark and Ligth Theme

export const lightTheme = {
    
    body:"#F4EEE8",
    text:"#5584AC",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
}

export const darkTheme = {
    
    body:"#5584AC",
    text:"#F4EEE8",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
}

// You can also use these breakpoints after importing it and use it as breakpoints.sm
export const breakpoints = {
    sm: 20,//em
    md: 30,
    lg: 45,
    xl: 60,
    xxl:75,
  }
  
  export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
  }