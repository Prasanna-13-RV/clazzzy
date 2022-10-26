import styled from "styled-components";

// normal
const Wrapper = styled.div`
    width: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 1000px;
    border-radius: 10px;
    box-shadow: black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
`;

const Head = styled.div`
    display: flex;
    align-content: center;
    height: 80px;
    background: #000;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin-left: 15px;
`;

const Body = styled.div`
    height: 500px;
    display: flex;
`;

const TableContainer = styled.div`
    flex: 3;
    position: relative;
`;

const FilterContainer = styled.div`
    flex: 1;
`;

// Table

const HeadingTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    text-align: center;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    box-shadow: black;
    margin: 10px;
    background: #fff;
    border-radius: 4px;
`;
