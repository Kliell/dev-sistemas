from fastapi import FastAPI

#Criar a instância da  aplicação
app = FastAPI(
    title='API de Cadastro -- Senai',
    description='Primeira API do curso de DS',
    version='0.1.0'
)

#Rota raiz - GET /
@app.get('/status')
def status():
    return {'status': 'online', 'servico' : 'API SENAI'}

# Lista simulada de usuarios -- substitui o banco por enquanto
usuarios_db = [
    {'id':1, 'nome':'Carlos Silva', 'cargo':'DEV', 'ativo':True },
    {'id':2, 'nome':'Alice Lima', 'cargo':'Dsign', 'ativo':True },
    {'id':3, 'nome':'Max Muller', 'cargo':'QA', 'ativo':True },
]

#GET /usuarios - retorna todos os usuarios
@app.get('/usuarios')
def listar_usuarios():
    return usuarios_db

#GET /usuarios/(id) - retornar um usuario pelo id 
#O (id) é um path parameter - FastAPI extrai da URL automaticamente
@app.get('/usuarios/usuario_id')
def buscar_usuario(usuario_id: int):
    for usuario in usuarios_db:
        if usuario['id'] == usuario_id:
            return usuario 
    return {'erro': 'Usuario nao encontrado'}

@app.get('/usuarios/busca')
def buscar_por_nome(nome: str =''): 
    if not nome: 
        return usuarios_db
    filtrados = [u for u in usuarios_db if nome.lower() in u ['nome'].lower()]
    return filtrados 