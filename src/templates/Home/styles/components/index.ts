import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding-bottom: 5px;
  color: #000;
`;
export const Subtitle = styled.p`
  font-size: 0.9em;
  text-align: center;

  color: #000;
`;
export const Container = styled.div`
  position: absolute;
  height: 520px;
  /* background-color: opacity; */
  width: 400px;
  border-radius: 30px;
  position: absolute;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
export const ContentHeader = styled.div`
  padding: 30px;
  display: flex;

  flex-direction: column;
`;
export const ContentLogos = styled.div`
  padding: 30px;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const ContentMain = styled.div`
  padding: 30px;
`;
