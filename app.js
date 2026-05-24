// Lógica de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupThemeToggle();
    setupSearch();
    setupFilterTabs();
    setupCasoSelector();
    setupCalculadora();
    displayAnalisis();
    displayValoresNormales();
    displayGlosario();
    displayCasos();
}

// ==================== TEMA OSCURO ====================
function setupThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(nextTheme);
    });
}

function applyTheme(theme) {
    const themeBtn = document.getElementById('themeToggle');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.textContent = 'Modo claro';
    } else {
        document.body.classList.remove('dark-theme');
        themeBtn.textContent = 'Modo oscuro';
    }
    localStorage.setItem('theme', theme);
}

// ==================== NAVEGACIÓN ====================
function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.getAttribute('data-section');
            
            // Remover clase active de todos los botones y secciones
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Agregar clase active al botón y sección seleccionados
            btn.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// ==================== BÚSQUEDA ====================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.analisis-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

// ==================== MOSTRAR ANÁLISIS ====================
function displayAnalisis() {
    const grid = document.getElementById('analisisGrid');
    grid.innerHTML = '';

    analisisData.forEach(analisis => {
        const card = createAnalisisCard(analisis);
        grid.appendChild(card);
    });
}

function createAnalisisCard(analisis) {
    const card = document.createElement('div');
    card.className = 'analisis-card';
    
    const valoresAltos = analisis.valoresAltos?.rango || 'N/A';
    const valoresBajos = analisis.valoresBajos?.rango || 'N/A';
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${analisis.nombre}</h3>
            <span class="categoria-badge">${analisis.categoria}</span>
        </div>
        <div class="card-content">
            <p><strong>Significado:</strong></p>
            <p>${analisis.significado}</p>
            
            <div class="valores-info">
                <div class="valor-item">
                    <span class="valor-label">Valores Normales:</span>
                    <span class="valor-normal">${Object.values(analisis.valoresNormales).join(' / ')}</span>
                </div>
                <div class="valor-item">
                    <span class="valor-label">⬆️ Valores Altos:</span>
                    <span class="valor-alto">${valoresAltos}</span>
                </div>
                <div class="valor-item">
                    <span class="valor-label">⬇️ Valores Bajos:</span>
                    <span class="valor-bajo">${valoresBajos}</span>
                </div>
            </div>
            
            <button class="btn-detalles" onclick="toggleDetalles(this)">Ver más detalles</button>
            <div class="detalles-oculto" style="display:none;">
                <div class="detalles-section">
                    <h4>Cuando está ALTO:</h4>
                    <p>${analisis.valoresAltos?.significado || 'Sin información'}</p>
                </div>
                <div class="detalles-section">
                    <h4>Cuando está BAJO:</h4>
                    <p>${analisis.valoresBajos?.significado || 'Sin información'}</p>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function toggleDetalles(btn) {
    const detalles = btn.nextElementSibling;
    const isVisible = detalles.style.display !== 'none';
    detalles.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? 'Ver más detalles' : 'Ver menos detalles';
}

// ==================== VALORES NORMALES ====================
function setupFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            displayValoresNormales(filter);
        });
    });
}

function displayValoresNormales(filter = 'todos') {
    const table = document.getElementById('valoresTable');
    table.innerHTML = '';
    
    let filteredData = analisisData;
    if (filter !== 'todos') {
        filteredData = analisisData.filter(a => a.categoria === filter);
    }
    
    const tableHTML = `
        <table class="valores-table">
            <thead>
                <tr>
                    <th>Análisis</th>
                    <th>Valores Normales</th>
                    <th>Interpretación</th>
                </tr>
            </thead>
            <tbody>
                ${filteredData.map(a => `
                    <tr>
                        <td><strong>${a.nombre}</strong></td>
                        <td>
                            <div class="valor-cell">
                                ${Object.entries(a.valoresNormales).map(([key, val]) => 
                                    `<div>${key}: <span class="valor-normal">${val}</span></div>`
                                ).join('')}
                            </div>
                        </td>
                        <td>
                            <div class="interpretacion-cell">
                                <p><strong>Alto:</strong> ${a.valoresAltos?.rango || 'N/A'}</p>
                                <p><strong>Bajo:</strong> ${a.valoresBajos?.rango || 'N/A'}</p>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    table.innerHTML = tableHTML;
}

// ==================== CASOS CLÍNICOS ====================
function setupCasoSelector() {
    const selector = document.getElementById('casoSelector');
    
    casosClinicos.forEach((caso, index) => {
        const btn = document.createElement('button');
        btn.className = `caso-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = caso.titulo;
        btn.onclick = () => selectCaso(caso, btn);
        selector.appendChild(btn);
    });
    
    // Mostrar primer caso por defecto
    if (casosClinicos.length > 0) {
        displayCasoDetalle(casosClinicos[0]);
    }
}

function selectCaso(caso, btn) {
    // Remover active de todos los botones
    document.querySelectorAll('.caso-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Mostrar caso
    displayCasoDetalle(caso);
}

function displayCasos() {
    // La primera carga se hace en setupCasoSelector
}

function displayCasoDetalle(caso) {
    const detalle = document.getElementById('casoDetalle');
    
    const resultadosHTML = Object.entries(caso.resultados).map(([key, val]) => {
        let className = 'resultado-normal';
        if (val.includes('alto') || val.includes('muy alto')) {
            className = 'resultado-alto';
        } else if (val.includes('bajo') || val.includes('muy bajo')) {
            className = 'resultado-bajo';
        }
        
        return `<div class="resultado-item ${className}">${key}: <strong>${val}</strong></div>`;
    }).join('');
    
    detalle.innerHTML = `
        <div class="caso-info">
            <h3>${caso.titulo}</h3>
            
            <div class="caso-section">
                <h4>👤 Información del Paciente</h4>
                <p>${caso.paciente}</p>
            </div>
            
            <div class="caso-section">
                <h4>🏥 Síntomas</h4>
                <p>${caso.sintomas}</p>
            </div>
            
            <div class="caso-section">
                <h4>🔍 Diagnóstico</h4>
                <p>${caso.diagnostico}</p>
            </div>
            
            <div class="caso-section">
                <h4>📊 Resultados de Laboratorio</h4>
                <div class="resultados-container">
                    ${resultadosHTML}
                </div>
            </div>
            
            <div class="caso-section">
                <h4>💡 Interpretación</h4>
                <p>${caso.interpretacion}</p>
            </div>
            
            <div class="caso-section tratamiento">
                <h4>⚕️ Tratamiento</h4>
                <p>${caso.tratamiento}</p>
            </div>
        </div>
    `;
}

// ==================== CALCULADORA ====================
function setupCalculadora() {
    const analisisSelect = document.getElementById('calcAnalisis');
    const sexoSelect = document.getElementById('calcSexo');
    const valorInput = document.getElementById('calcValor');
    const boton = document.getElementById('calcBtn');

    displayCalculadoraOptions();
    updateValorPlaceholder();

    analisisSelect.addEventListener('change', updateValorPlaceholder);
    sexoSelect.addEventListener('change', updateValorPlaceholder);
    boton.addEventListener('click', interpretarValor);

    function updateValorPlaceholder() {
        const seleccion = calculadoraData.find(item => item.id === analisisSelect.value);
        valorInput.placeholder = seleccion?.ejemplo ? `Ej. ${seleccion.ejemplo}` : 'Ingresa tu valor';
    }
}

function displayCalculadoraOptions() {
    const select = document.getElementById('calcAnalisis');
    select.innerHTML = calculadoraData.map(item => `<option value="${item.id}">${item.nombre}</option>`).join('');
}

function interpretarValor() {
    const analisisSelect = document.getElementById('calcAnalisis');
    const sexoSelect = document.getElementById('calcSexo');
    const valorInput = document.getElementById('calcValor');
    const resultadoBox = document.getElementById('calcResultado');

    const analisis = calculadoraData.find(item => item.id === analisisSelect.value);
    const valor = parseFloat(valorInput.value);
    const grupo = sexoSelect.value;

    if (!analisis) {
        resultadoBox.innerHTML = `<p class="resultado-error">Selecciona un análisis válido.</p>`;
        return;
    }
    if (Number.isNaN(valor)) {
        resultadoBox.innerHTML = `<p class="resultado-error">Ingresa un número válido.</p>`;
        return;
    }

    const referencia = analisis.referencias[grupo] || analisis.referencias.adulto || analisis.referencias.default;
    const min = referencia?.min ?? -Infinity;
    const max = referencia?.max ?? Infinity;
    const estado = valor < min ? 'bajo' : valor > max ? 'alto' : 'normal';
    const rango = getRangoText(referencia, analisis.unidad);
    const mensaje = analisis.mensajes[estado] || 'Valor fuera de rango.';

    resultadoBox.innerHTML = `
        <div class="calc-summary ${estado}">
            <p><strong>${analisis.nombre}</strong> — <span>${valor} ${analisis.unidad}</span></p>
            <p><strong>Rango de referencia:</strong> ${rango}</p>
            <p class="calc-state">Estado: <strong>${estado.toUpperCase()}</strong></p>
            <p>${mensaje}</p>
        </div>
    `;
}

// ==================== GLOSARIO ====================
function displayGlosario() {
    const grid = document.getElementById('glosarioGrid');
    grid.innerHTML = glosarioData.map(item => `
        <article class="glosario-card">
            <h3>${item.termino}</h3>
            <p>${item.definicion}</p>
        </article>
    `).join('');
}

function getRangoText(referencia, unidad) {
    if (!referencia) {
        return 'No disponible';
    }

    if (referencia.min !== undefined && referencia.max !== undefined) {
        return `${referencia.min} - ${referencia.max} ${unidad}`;
    }
    if (referencia.min !== undefined) {
        return `> ${referencia.min} ${unidad}`;
    }
    if (referencia.max !== undefined) {
        return `< ${referencia.max} ${unidad}`;
    }
    return 'Referencia no definida';
}

function displayGlosario() {
    const grid = document.getElementById('glosarioGrid');
    grid.innerHTML = glosarioData.map(item => `
        <article class="glosario-card">
            <h3>${item.termino}</h3>
            <p>${item.definicion}</p>
        </article>
    `).join('');
}

// ==================== UTILIDADES ====================
function getEstadoValor(valor) {
    const lower = valor.toLowerCase();
    if (lower.includes('alto') || lower.includes('superior')) return 'alto';
    if (lower.includes('bajo') || lower.includes('inferior')) return 'bajo';
    return 'normal';
}
