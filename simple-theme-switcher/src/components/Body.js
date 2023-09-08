import React from 'react'
import { useTheme } from "./../ThemeProvider"



const Title = () => {
    const { theme } = useTheme()

    return <h2 className={theme.textClass}>Welcome to our pizzeria!</h2>;
}

const Paragraph = () => {

  const {theme} = useTheme()

return (
  <p className={theme.textClass}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500
  </p>
);
};

const Body = () => {
  return (
    <div>
      <article>
        <Title />
        <Paragraph />
      </article>
    </div>
  );
}

export default Body