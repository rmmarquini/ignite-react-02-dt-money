import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 300;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }

    strong {
      display: block;
      margin-top: 1.5rem;
      font-size: 2.2rem;
      font-weight: 500 !important;
      line-height: 3rem;
    }

  }

`