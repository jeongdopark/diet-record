import styled from '@emotion/styled'

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
`

export const LandingLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90vh;
  flex-direction: column;
`

export const LandingRightContainer = styled.div`
  background-color: black;
  display: block;
  width: 50%;
  height: 90vh;
`

export const LandingSpan = styled.span`
  background: linear-gradient(to right, #007fff, #0059b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;
`

export const LandingH1 = styled.h1`
  font-weight: 800;
  font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
  line-height: 1.3;
  scroll-snap-margin-top: calc(var(--MuiDocs-header-height) + 32px);
  scroll-margin-top: calc(var(--MuiDocs-header-height) + 32px);
  color: #0a1929;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 600px;
`

export const LandingLoginContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  width: 60%;
`

export const LandingLoginDiv = styled.div`
  width: 130px;
  height: 50px;
  background-color: #007fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  color: white;
`

export const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBtn = styled.img`
  width: 40px;
  height: 40px;
  background-color: aqua;
  margin-left: 30px;
  border-radius: 50%;
  cursor: pointer;
`
