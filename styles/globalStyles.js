import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    a{
        text-decoration: none;
        display: block;
    }

    button{
        border: none;
        outline: none;
        background-color: transparent;
    }

    input{
        border: none;
        outline: none;
        background-color: transparent;
    }

    /* SIZES */
    h1{
        font-size: 48px;
    }
    .fs-24px{
        font-size: 24px;
    }
    .fs-28px{
        font-size: 28px;
    }
    .fs-20px{
        font-size: 20px;
    }
    .fs-16px{
        font-size: 16px;
    }
    .fs-18px{
        font-size: 18px;
    }
    .fs-36px{
        font-size: 36px;
    }
    .fs-30px{
        font-size: 30px;
    }

    /* colors */
    .gray{
        color: #263238;
    }
    .white{
        color: white;
    }
    .purple{
      color: #5C0C40;
    }
    .light-purple{
      color : #763D8E;
    }
    .bg-purple{
      background:#4a114a ;
    }

    /* font-weights */
    .weight-9 {
        font-weight: 900;
    }
    .weight-8 {
        font-weight: 800;
    }
    .weight-7 {
        font-weight: 700;
    }
    .weight-6 {
        font-weight: 600;
    }
    .weight-5 {
        font-weight: 500;
    }
    .weight-4 {
        font-weight: 400;
    }
    .weight-3 {
        font-weight: 300;
    }



    /* margins */
.mb-5px {
  margin-bottom: 5px;
}
.mb-10px {
  margin-bottom: 10px;
}
.mb-15px {
  margin-bottom: 15px;
}
.mb-20px {
  margin-bottom: 20px;
}
.mb-25px {
  margin-bottom: clamp(5px, 1.7361111111111112vw, 25px);
}
.mb-30px {
  margin-bottom: clamp(18px, 2.0833333333333335vw, 30px);
}
.mb-35px {
  margin-bottom: 35px;
}
.mb-40px {
  margin-bottom: 40px;
}
.mb-45px {
  margin-bottom: 45px;
}
.mb-50px {
  margin-bottom: clamp(20px, 3.4722222222222223vw, 50px);
}
.mb-55px {
  margin-bottom: 55px;
}
.mb-60px {
  margin-bottom: clamp(40px, 4.166666666666667vw, 60px);
}
.mb-70px {
  margin-bottom: clamp(40px, 4.861111111111111vw, 70px);
}
.mb-75px {
  margin-bottom: clamp(35px, 5.208333333333333vw, 75px);
}
.mb-80px {
  margin-bottom: 80px;
}
.mb-100px {
  margin-bottom: clamp(40px, 6.944444444444445vw, 100px);
}
.mb-150px {
  margin-bottom: clamp(80px, 10.416666666666666vw, 150px);
}

.margin-center {
  margin: 0 auto;
}


/* CONFIGURATIONS */
.pointer{
    cursor: pointer;
}



`;

export const Container = styled.div`
  width: 80%;
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const PageContainer = styled.div`
  @media (max-width: 500px) {
    padding-bottom: 60px;
  }
`;

export default GlobalStyle;
