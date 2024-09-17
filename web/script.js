const apiUrlViagem = 'http://localhost:3000/viagem';

async function findAllViagems() {
  const response = await fetch(apiUrlViagem);
  const data = await response.json();
  document.getElementById('results').textContent = JSON.stringify(
    data,
    null,
    2,
  );
}

async function findByIdViagem() {
  const id = document.getElementById('buscaIdViagem').value;
  if (!id) {
    alert('Por favor, insira um ID');
    return;
  }

  const response = await fetch(`${apiUrlViagem}/${id}`);
  const data = await response.json();
  document.getElementById('results').textContent = JSON.stringify(
    data,
    null,
    2,
  );
}

document.getElementById('ViagemForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const viagemNome = document.getElementById('viagemNome').value;
  const viagemDataSaida = document.getElementById('viagemDataSaida').value;
  const viagemDataChegada = document.getElementById('viagemDataChegada').value;
  const viagemValor = document.getElementById('viagemValor').value;

  const viagem = {
    nome: viagemNome,
    dataSaida: viagemDataSaida,
    dataChegada: viagemDataChegada,
    valor: viagemValor
  };

  const method = id ? 'PUT' : 'POST';
  const url = id ? `${apiUrlViagem}/${id}` : apiUrlViagem;

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(viagem),
  });

  const data = await response.json();
  document.getElementById('results').textContent = JSON.stringify(
    data,
    null,
    2,
  );
});

async function removeViagem() {
  const id = document.getElementById('removeViagemId').value;
  if (!id) {
    alert('Por favor, insira um ID');
    return;
  }

  const response = await fetch(`${apiUrlViagem}/${id}`, {
    method: 'DELETE',
  });

  if (response.status === 204) {
    document.getElementById('results').textContent =
      'Viagem removida com sucesso';
  } else {
    document.getElementById('results').textContent = 'Erro ao remover viagem';
  }
}