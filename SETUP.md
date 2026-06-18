# Nautika Academy v3 — Setup Completo

## 1. Criar projeto no Supabase (gratuito)

1. Acesse https://supabase.com e crie uma conta
2. Clique em **"New project"** → nome: `nautika-academy`
3. Guarde a senha do banco que você definir
4. Aguarde ~2 minutos para o projeto inicializar

## 2. Criar as tabelas no banco

No Supabase, vá em **SQL Editor** e execute este script:

```sql
-- Perfis dos usuários
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  level_name TEXT DEFAULT 'Recruta',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progresso por linha de produto
CREATE TABLE section_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  section_name TEXT NOT NULL,
  sessions INTEGER DEFAULT 0,
  best_score INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, section_name)
);

-- Histórico de sessões
CREATE TABLE session_history (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  section_name TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Permissões (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users see own progress" ON section_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users see own history" ON session_history FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "All see ranking" ON profiles FOR SELECT USING (true);
```

## 3. Configurar autenticação

No Supabase → **Authentication → Settings**:
- Em "Allowed email domains" adicione: `gruponautika.com.br`
- Desabilite "Confirm email" se quiser acesso imediato (opcional)

## 4. Pegar as credenciais

No Supabase → **Settings → API**:
- Copie o **Project URL**
- Copie o **anon public key**

## 5. Configurar no Vercel

No painel do Vercel → **Settings → Environment Variables**, adicione:
```
REACT_APP_SUPABASE_URL     = https://xxxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY = eyJhbG...
```

## 6. Deploy no Vercel

Suba os arquivos no GitHub e importe no Vercel como antes.
Lembre de definir o **Root Directory** como `nautika-v3` nas configurações do projeto.

## Pronto! 🎉
O app terá:
- ✅ Login com e-mail @gruponautika.com.br
- ✅ Progresso salvo na nuvem
- ✅ Ranking do time em tempo real
- ✅ Histórico de sessões
- ✅ XP e níveis persistentes
