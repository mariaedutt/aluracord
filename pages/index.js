import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from "react";
import { useRouter } from 'next/router';


function Title(props) {
    const Tag = props.tag || 'h1';
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 36px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

//componente React
// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />

//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
        
//     )
//   }
//export default HomePage

export default function PaginaInicial() {
    //const username = 'mariaedutt';
    const [userName, setUserName] = React.useState('');
    const roteamento = useRouter();
  
    return (
      <>
        {/* Componente Box é da biblioteca skynexui que está sendo utilizada neste projeto */}
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            //backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.pinimg.com/564x/07/7e/aa/077eaa5764747812c023de31ebc49f47.jpg)',
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover', 
            backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento) {
                infosDoEvento.preventDefault();
                roteamento.push('/chat')
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.primary["050"] }}>
                {appConfig.name}
              </Text>
              {/* <input 
              type='text' 
              value={userName}
              onChange={function handler(){
                  console.log('usuário digitou', event.target.value);
                  //Onde está o valor?
                  const newUserName = event.target.value;
                  //Trocar o valor da variavel através do React
                  setUserName(newUserName);
              }}
              /> */}
                <TextField
                  placeholder="Digite o seu usuário do github aqui"
                  fullWidth
                  textFieldColors={{
                    neutral: {
                      textColor: appConfig.theme.colors.neutrals[200],
                      mainColor: appConfig.theme.colors.neutrals[900],
                      mainColorHighlight: appConfig.theme.colors.primary[500],
                      backgroundColor: appConfig.theme.colors.neutrals[800],
                    },
                  }}
                  value={userName}
                  onChange={function handler(){
                      const newUserName = event.target.value;
                      setUserName(newUserName);
                }}
               /> 
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                disabled={userName > 0 && false}
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary["050"],
                  mainColorLight: appConfig.theme.colors.primary[100],
                  mainColorStrong: appConfig.theme.colors.primary[100],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                 
                //pegar a foto do usuário no github com o nomede usuário+.png
                src={userName.length > 2 
                    ? `https://github.com/${userName}.png`
                    :'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
                }
                
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {userName}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }