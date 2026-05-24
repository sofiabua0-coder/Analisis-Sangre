// Datos de análisis de sangre
const analisisData = [
    {
        id: 'hemoglobina',
        nombre: 'Hemoglobina (Hb)',
        categoria: 'completa',
        significado: 'Proteína en los glóbulos rojos que transporta oxígeno en la sangre. Es fundamental para llevar oxígeno a todos los tejidos del cuerpo.',
        valoresNormales: {
            hombres: '13.5 - 17.5 g/dL',
            mujeres: '12.0 - 15.5 g/dL',
            ninos: '11.0 - 16.0 g/dL'
        },
        valoresAltos: {
            rango: '> 17.5 g/dL (hombres)',
            significado: 'Puede indicar: Policitemia, deshidratación, vivir en altitud elevada, tabaquismo, enfermedad pulmonar.'
        },
        valoresBajos: {
            rango: '< 12.0 g/dL (mujeres)',
            significado: 'Puede indicar: Anemia, deficiencia de hierro, hemorragia, enfermedad crónica, desnutrición.'
        }
    },
    {
        id: 'hematocrito',
        nombre: 'Hematocrito (Hto)',
        categoria: 'completa',
        significado: 'Porcentaje de glóbulos rojos en relación al volumen total de sangre. Refleja la capacidad de transporte de oxígeno.',
        valoresNormales: {
            hombres: '41 - 53%',
            mujeres: '36 - 46%',
            ninos: '33 - 40%'
        },
        valoresAltos: {
            rango: '> 53% (hombres)',
            significado: 'Puede indicar: Policitemia, deshidratación severa, vivir en altitud, enfermedad cardiorespiratorio.'
        },
        valoresBajos: {
            rango: '< 36% (mujeres)',
            significado: 'Puede indicar: Anemia, hemorragia, destrucción excesiva de glóbulos rojos, deficiencia de hierro.'
        }
    },
    {
        id: 'glc-rojos',
        nombre: 'Glóbulos Rojos (GR)',
        categoria: 'completa',
        significado: 'Células responsables del transporte de oxígeno. Un conteo bajo o alto puede afectar la capacidad de oxigenación.',
        valoresNormales: {
            hombres: '4.5 - 5.9 millones/μL',
            mujeres: '4.1 - 5.1 millones/μL',
            ninos: '4.5 - 5.3 millones/μL'
        },
        valoresAltos: {
            rango: '> 5.9 millones/μL',
            significado: 'Puede indicar: Policitemia, deshidratación, hipoxia crónica, fumadores.'
        },
        valoresBajos: {
            rango: '< 4.1 millones/μL (mujeres)',
            significado: 'Puede indicar: Anemia, hemorragia, deficiencia de hierro, folato o B12, enfermedad renal.'
        }
    },
    {
        id: 'vgm',
        nombre: 'VGM (Volumen Globular Medio)',
        categoria: 'completa',
        significado: 'Tamaño promedio de los glóbulos rojos. Ayuda a clasificar los tipos de anemia.',
        valoresNormales: {
            adultos: '80 - 100 fL'
        },
        valoresAltos: {
            rango: '> 100 fL (Macrocitosis)',
            significado: 'Glóbulos rojos más grandes. Puede indicar: Déficit de B12, ácido fólico, hipotiroidismo, anemia megaloblástica.'
        },
        valoresBajos: {
            rango: '< 80 fL (Microcitosis)',
            significado: 'Glóbulos rojos más pequeños. Puede indicar: Deficiencia de hierro, talasemia, anemia por enfermedad crónica.'
        }
    },
    {
        id: 'glc-blancos',
        nombre: 'Glóbulos Blancos (WBC)',
        categoria: 'completa',
        significado: 'Células del sistema inmunológico que defienden contra infecciones. Su cantidad refleja la capacidad defensiva.',
        valoresNormales: {
            adultos: '4.5 - 11.0 x 10³/μL'
        },
        valoresAltos: {
            rango: '> 11.0 x 10³/μL (Leucocitosis)',
            significado: 'Puede indicar: Infección bacteriana, estrés, leucemia, inflamación, uso de corticoides.'
        },
        valoresBajos: {
            rango: '< 4.5 x 10³/μL (Leucopenia)',
            significado: 'Puede indicar: Infección severa, VIH/SIDA, medicamentos, deficiencia de B12, lupus, agotamiento de médula ósea.'
        }
    },
    {
        id: 'plaquetas',
        nombre: 'Plaquetas',
        categoria: 'completa',
        significado: 'Células fragmentadas que participan en la coagulación de la sangre. Esenciales para prevenir hemorragias.',
        valoresNormales: {
            adultos: '150 - 400 x 10³/μL'
        },
        valoresAltos: {
            rango: '> 400 x 10³/μL (Trombocitosis)',
            significado: 'Puede indicar: Inflamación, cáncer, policitemia vera, esplenectomía, estrés.'
        },
        valoresBajos: {
            rango: '< 150 x 10³/μL (Trombocitopenia)',
            significado: 'Puede indicar: Púrpura trombocitopénica, lupus, medicamentos, dengue, VIH, cirrosis hepática.'
        }
    },
    {
        id: 'glucosa',
        nombre: 'Glucosa',
        categoria: 'bioquimica',
        significado: 'Azúcar en la sangre. Su regulación es fundamental para la energía celular y la función metabólica.',
        valoresNormales: {
            ayunas: '70 - 100 mg/dL',
            aleatorio: '< 140 mg/dL'
        },
        valoresAltos: {
            rango: '> 126 mg/dL (ayunas)',
            significado: 'Puede indicar: Diabetes tipo 2, prediabetes, estrés, hipertiroidismo, pancreatitis, infección.'
        },
        valoresBajos: {
            rango: '< 70 mg/dL (Hipoglucemia)',
            significado: 'Puede indicar: Sobredosis de insulina, ayuno prolongado, ejercicio intenso, insuficiencia hepática, tumores pancreáticos.'
        }
    },
    {
        id: 'creatinina',
        nombre: 'Creatinina',
        categoria: 'bioquimica',
        significado: 'Producto de desecho del metabolismo muscular. Filtrada por los riñones. Indica función renal.',
        valoresNormales: {
            hombres: '0.7 - 1.3 mg/dL',
            mujeres: '0.6 - 1.1 mg/dL'
        },
        valoresAltos: {
            rango: '> 1.3 mg/dL',
            significado: 'Puede indicar: Insuficiencia renal, infarto renal, obstrucción urinaria, deshidratación severa, diabetes.'
        },
        valoresBajos: {
            rango: '< 0.6 mg/dL',
            significado: 'Puede indicar: Desnutrición, embarazo, enfermedad muscular, cirrosis, distrofia muscular.'
        }
    },
    {
        id: 'urea',
        nombre: 'Urea (BUN)',
        categoria: 'bioquimica',
        significado: 'Producto del metabolismo proteico. Filtrada por los riñones. Importante indicador de función renal.',
        valoresNormales: {
            adultos: '7 - 20 mg/dL'
        },
        valoresAltos: {
            rango: '> 20 mg/dL',
            significado: 'Puede indicar: Insuficiencia renal, deshidratación, infarto, hemorragia GI, dieta alta en proteínas.'
        },
        valoresBajos: {
            rango: '< 7 mg/dL',
            significado: 'Puede indicar: Insuficiencia hepática, desnutrición, embarazo, exceso de hidratación.'
        }
    },
    {
        id: 'sodio',
        nombre: 'Sodio (Na)',
        categoria: 'bioquimica',
        significado: 'Electrolito esencial para el equilibrio de fluidos, función nerviosa y muscular.',
        valoresNormales: {
            adultos: '135 - 145 mEq/L'
        },
        valoresAltos: {
            rango: '> 145 mEq/L (Hipernatremia)',
            significado: 'Puede indicar: Deshidratación, diabetes insípida, exceso de sodio en dieta, insuficiencia renal.'
        },
        valoresBajos: {
            rango: '< 135 mEq/L (Hiponatremia)',
            significado: 'Puede indicar: SIADH, insuficiencia adrenal, sobrecarga de líquidos, vómitos, diarrea, diuréticos.'
        }
    },
    {
        id: 'potasio',
        nombre: 'Potasio (K)',
        categoria: 'bioquimica',
        significado: 'Electrolito vital para la función cardíaca, muscular y nerviosa.',
        valoresNormales: {
            adultos: '3.5 - 5.0 mEq/L'
        },
        valoresAltos: {
            rango: '> 5.0 mEq/L (Hiperpotasemia)',
            significado: 'Puede indicar: Insuficiencia renal, destrucción celular, medicamentos ACE, diabetes, transfusión excesiva.'
        },
        valoresBajos: {
            rango: '< 3.5 mEq/L (Hipopotasemia)',
            significado: 'Puede indicar: Vómitos, diarrea, diuréticos, sudoración excesiva, desnutrición, insulina.'
        }
    },
    {
        id: 'calcio',
        nombre: 'Calcio',
        categoria: 'bioquimica',
        significado: 'Mineral esencial para huesos, dientes, función nerviosa y muscular.',
        valoresNormales: {
            adultos: '8.5 - 10.2 mg/dL'
        },
        valoresAltos: {
            rango: '> 10.2 mg/dL (Hipercalcemia)',
            significado: 'Puede indicar: Hiperparatiroidismo, cáncer óseo, intoxicación por vitamina D, tuberculosis, tirotoxicosis.'
        },
        valoresBajos: {
            rango: '< 8.5 mg/dL (Hipocalcemia)',
            significado: 'Puede indicar: Hipoparatiroidismo, deficiencia de vitamina D, insuficiencia renal, desnutrición, pancreatitis.'
        }
    },
    {
        id: 'ast',
        nombre: 'AST (Aspartato Aminotransferasa)',
        categoria: 'bioquimica',
        significado: 'Enzima presente en hígado, corazón y músculos. Elevada indica daño celular en estos órganos.',
        valoresNormales: {
            adultos: '0 - 40 U/L'
        },
        valoresAltos: {
            rango: '> 40 U/L',
            significado: 'Puede indicar: Hepatitis, cirrosis, infarto de miocardio, rabdomiolisis, hemólisis, daño muscular.'
        },
        valoresBajos: {
            rango: '< 0 U/L',
            significado: 'Generalmente sin significado clínico importante.'
        }
    },
    {
        id: 'alt',
        nombre: 'ALT (Alanina Aminotransferasa)',
        categoria: 'bioquimica',
        significado: 'Enzima principalmente en el hígado. Más específica que AST para daño hepático.',
        valoresNormales: {
            adultos: '0 - 41 U/L'
        },
        valoresAltos: {
            rango: '> 41 U/L',
            significado: 'Puede indicar: Hepatitis viral, cirrosis, esteatosis hepática, alcoholismo, medicamentos hepatotóxicos.'
        },
        valoresBajos: {
            rango: '< 0 U/L',
            significado: 'Generalmente sin significado clínico importante.'
        }
    },
    {
        id: 'colesterol-total',
        nombre: 'Colesterol Total',
        categoria: 'bioquimica',
        significado: 'Grasa en la sangre. Fundamental para hormonas y membranas celulares, pero el exceso aumenta riesgo cardiovascular.',
        valoresNormales: {
            adultos: '< 200 mg/dL (deseable)'
        },
        valoresAltos: {
            rango: '200-239 mg/dL (límite alto), > 240 mg/dL (alto)',
            significado: 'Puede indicar: Dislipidemia, dieta rica en grasas, hipotiroidismo, diabetes, predisposición genética, enfermedad renal.'
        },
        valoresBajos: {
            rango: '< 100 mg/dL',
            significado: 'Puede indicar: Desnutrición, malabsorción, enfermedad hepática severa, hipotiroidismo, medicamentos.'
        }
    },
    {
        id: 'ldl',
        nombre: 'LDL (Colesterol Malo)',
        categoria: 'bioquimica',
        significado: 'Lipoproteína de baja densidad. Transporta colesterol a las arterias. El exceso causa aterosclerosis.',
        valoresNormales: {
            adultos: '< 100 mg/dL (óptimo)'
        },
        valoresAltos: {
            rango: '> 100 mg/dL',
            significado: 'Aumenta riesgo de infarto y accidente cerebrovascular. Requiere cambios de estilo de vida y posiblemente medicación.'
        },
        valoresBajos: {
            rango: '< 40 mg/dL',
            significado: 'Generalmente beneficioso, pero valores muy bajos pueden indicar desnutrición severa.'
        }
    },
    {
        id: 'hdl',
        nombre: 'HDL (Colesterol Bueno)',
        categoria: 'bioquimica',
        significado: 'Lipoproteína de alta densidad. Protege las arterias eliminando colesterol. Valores altos son protectores.',
        valoresNormales: {
            hombres: '> 40 mg/dL',
            mujeres: '> 50 mg/dL'
        },
        valoresAltos: {
            rango: '> 60 mg/dL',
            significado: 'Ideal. Protege contra enfermedades cardiovasculares.'
        },
        valoresBajos: {
            rango: '< 40 mg/dL',
            significado: 'Aumenta riesgo cardiovascular. Requiere actividad física y cambios dietéticos.'
        }
    },
    {
        id: 'trigliceridos',
        nombre: 'Triglicéridos',
        categoria: 'bioquimica',
        significado: 'Tipo de grasa en la sangre. Niveles elevados aumentan riesgo de enfermedad cardíaca.',
        valoresNormales: {
            adultos: '< 150 mg/dL (ayunas)'
        },
        valoresAltos: {
            rango: '150-499 mg/dL (alto), > 500 mg/dL (muy alto)',
            significado: 'Puede indicar: Obesidad, diabetes, consumo excesivo de alcohol, dieta alta en carbohidratos, genética.'
        },
        valoresBajos: {
            rango: '< 30 mg/dL',
            significado: 'Generalmente beneficioso, pero valores muy bajos pueden indicar malnutrición.'
        }
    },
    {
        id: 'pt',
        nombre: 'PT (Tiempo de Protrombina)',
        categoria: 'coagulacion',
        significado: 'Mide el tiempo de coagulación. Evalúa la vía extrínseca de la coagulación y función hepática.',
        valoresNormales: {
            adultos: '11 - 13.5 segundos'
        },
        valoresAltos: {
            rango: '> 13.5 segundos',
            significado: 'Puede indicar: Deficiencia de vitamina K, enfermedad hepática, anticoagulantes, lupus, deficiencia de factores.'
        },
        valoresBajos: {
            rango: '< 11 segundos',
            significado: 'Puede indicar: Trombofilia, policitemia, deshidratación.'
        }
    },
    {
        id: 'aptt',
        nombre: 'APTT (Tiempo Tromboplastina Parcial Activada)',
        categoria: 'coagulacion',
        significado: 'Mide la vía intrínseca de la coagulación. Importante para detectar deficiencias de factores de coagulación.',
        valoresNormales: {
            adultos: '25 - 35 segundos'
        },
        valoresAltos: {
            rango: '> 35 segundos',
            significado: 'Puede indicar: Heparinemia, deficiencia de factores VIII/IX/XI/XII, inhibidor de lupus, von Willebrand.'
        },
        valoresBajos: {
            rango: '< 25 segundos',
            significado: 'Puede indicar: Trombofilia, hipercoagulabilidad.'
        }
    }
];

// Casos clínicos
const casosClinicos = [
    {
        id: 'caso1',
        titulo: 'Anemia por Deficiencia de Hierro',
        paciente: 'Mujer, 35 años, carpintero',
        sintomas: 'Fatiga, disnea con esfuerzo, palidez, taquicardia',
        diagnostico: 'Anemia ferropénica por hemorragia menstrual excesiva',
        resultados: {
            'hemoglobina': '9.5 g/dL (bajo)',
            'hematocrito': '28%',
            'glc-rojos': '3.8 millones/μL',
            'vgm': '73 fL (microcitosis)',
            'hierro': '30 μg/dL (bajo)',
            'ferritina': '12 ng/mL (baja)'
        },
        interpretacion: 'Los glóbulos rojos son pequeños (VGM bajo) debido a insuficiente hemoglobina por falta de hierro. La hemoglobina baja causa los síntomas de fatiga y disnea.',
        tratamiento: 'Suplementos de hierro oral, aumentar ingesta de alimentos ricos en hierro, evaluar causa de hemorragia.'
    },
    {
        id: 'caso2',
        titulo: 'Infección Bacteriana Severa',
        paciente: 'Hombre, 28 años, sepsis por neumonía',
        sintomas: 'Fiebre 39°C, tosse productiva, dificultad respiratoria, confusión',
        diagnostico: 'Neumonía bacteriana con probable sepsis',
        resultados: {
            'glc-blancos': '18.5 x 10³/μL (alto)',
            'neutrofilos': '85% (alto)',
            'creatinina': '1.8 mg/dL (alto)',
            'urea': '45 mg/dL (alto)',
            'lactato': '3.2 mmol/L (alto)',
            'pao2': '65 mmHg (bajo)'
        },
        interpretacion: 'Leucocitosis severa con predominio de neutrófilos (respuesta a infección). El aumento de creatinina y lactato sugieren disfunción renal y shock. Requiere hospitalización urgente.',
        tratamiento: 'Antibióticos de amplio espectro IV, oxigenoterapia, fluidos IV, monitoreo en UCI.'
    },
    {
        id: 'caso3',
        titulo: 'Diabetes Mellitus Tipo 2',
        paciente: 'Mujer, 52 años, obesidad grado II',
        sintomas: 'Polidipsia, poliuria, fatiga, visión borrosa',
        diagnostico: 'Diabetes Mellitus tipo 2 recién diagnosticada',
        resultados: {
            'glucosa': '285 mg/dL (ayunas, alto)',
            'hemoglobina_glicosilada': '10.2% (alto)',
            'urea': '22 mg/dL (ligeramente alto)',
            'creatinina': '1.1 mg/dL',
            'trigliceridos': '320 mg/dL (alto)',
            'colesterol-total': '245 mg/dL'
        },
        interpretacion: 'Glucosa muy elevada confirma diabetes. HbA1c del 10% indica que ha tenido hiperglucemia durante 2-3 meses. Perfil lipídico alterado aumenta riesgo cardiovascular.',
        tratamiento: 'Cambios en estilo de vida (dieta, ejercicio), metformina oral, monitoring regular, remisión a endocrinólogo.'
    },
    {
        id: 'caso4',
        titulo: 'Insuficiencia Renal Crónica',
        paciente: 'Hombre, 68 años, hipertenso con diabetes',
        sintomas: 'Fatiga, retención de líquidos, anorexia, palidez',
        diagnostico: 'Insuficiencia renal crónica estadio 3b',
        resultados: {
            'creatinina': '3.2 mg/dL (alto)',
            'urea': '85 mg/dL (muy alto)',
            'potasio': '5.8 mEq/L (alto)',
            'calcio': '7.8 mg/dL (bajo)',
            'hemoglobina': '9.2 g/dL (bajo)',
            'fgf': '32 mL/min (reducido)'
        },
        interpretacion: 'Elevación significativa de creatinina y urea indica pérdida de función renal. Hiperpotasemia por disminución de excreción. Anemia por deficiencia de eritropoyetina renal.',
        tratamiento: 'Control de presión arterial, evitar medicamentos nefrotóxicos, suplementos de hierro, monitoreo frecuente, preparación para diálisis.'
    },
    {
        id: 'caso5',
        titulo: 'Hepatitis Viral Aguda',
        paciente: 'Hombre, 42 años, viajero',
        sintomas: 'Ictericia, dolor abdominal, náuseas, orina oscura',
        diagnostico: 'Hepatitis A aguda',
        resultados: {
            'bilirrubina-total': '8.5 mg/dL (muy alto)',
            'ast': '3200 U/L (muy alto)',
            'alt': '3800 U/L (muy alto)',
            'albumina': '3.2 g/dL (bajo)',
            'pt': '14.2 seg (ligeramente prolongado)',
            'plaquetas': '120 x 10³/μL (bajo normal)'
        },
        interpretacion: 'Elevación masiva de transaminasas (AST/ALT) indica daño hepatocelular agudo severo. Bilirrubina muy elevada causa ictericia. PT prolongado sugiere compromiso de síntesis hepática.',
        tratamiento: 'Reposo absoluto, hidratación, evitar hepatotóxicos, monitoreo de función hepática, usualmente recuperación completa.'
    },
    {
        id: 'caso6',
        titulo: 'Trombocitopenia Inmune',
        paciente: 'Mujer, 38 años, sin traumatismos previos',
        sintomas: 'Petequias, epistaxis frecuente, hemorragia gingival',
        diagnostico: 'Púrpura Trombocitopénica Idiopática (PTI)',
        resultados: {
            'plaquetas': '15 x 10³/μL (muy bajo)',
            'glc-rojos': '4.8 millones/μL (normal)',
            'hemoglobina': '13.2 g/dL (normal)',
            'glc-blancos': '7.2 x 10³/μL (normal)',
            'pt': '12.5 seg (normal)',
            'aptt': '28 seg (normal)'
        },
        interpretacion: 'Trombocitopenia severa aislada (resto de series normales) es típica de PTI. Las plaquetas están siendo destruidas por anticuerpos. Alto riesgo de hemorragia intracraneal.',
        tratamiento: 'Corticoides sistémicos, inmunoglobulina IV, posible esplenectomía, evitar traumatismos, medicamentos hemostáticos si es necesario.'
    },
    {
        id: 'caso7',
        titulo: 'Anemia Megaloblástica por Deficiencia de B12',
        paciente: 'Hombre, 47 años, vegano de largo plazo',
        sintomas: 'Cansancio, hormigueo en manos y pies, dificultad para concentrarse',
        diagnostico: 'Anemia megaloblástica por deficiencia de vitamina B12',
        resultados: {
            'hemoglobina': '8.8 g/dL (bajo)',
            'hematocrito': '26% (bajo)',
            'vgm': '105 fL (alto)',
            'glc-rojos': '3.9 millones/μL (bajo)',
            'b12': '120 pg/mL (bajo)',
            'ferritina': '55 ng/mL (normal)'
        },
        interpretacion: 'El VGM alto indica glóbulos rojos grandes típicos de anemia megaloblástica. La B12 baja confirma la causa nutricional en un paciente vegetariano estricto.',
        tratamiento: 'Suplementos de vitamina B12 intramuscular y cambios en la dieta para incluir alimentos fortificados y derivados animales si es posible.'
    },
    {
        id: 'caso8',
        titulo: 'Síndrome Metabólico',
        paciente: 'Mujer, 54 años, hipertensa y con sobrepeso',
        sintomas: 'Cansancio moderado, dolor leve en el pecho con esfuerzo, sed frecuente',
        diagnostico: 'Síndrome metabólico con dislipidemia y glucosa alterada',
        resultados: {
            'glucosa': '138 mg/dL (alto)',
            'trigliceridos': '260 mg/dL (alto)',
            'colesterol-total': '262 mg/dL (alto)',
            'hdl': '35 mg/dL (bajo)',
            'ldl': '165 mg/dL (alto)',
            'presion': '150/95 mmHg (alto)'
        },
        interpretacion: 'Perfil lipídico y glucosa alterados junto a hipertensión indican síndrome metabólico. El HDL bajo y LDL alto aumentan el riesgo cardiovascular.',
        tratamiento: 'Dieta hipolipemiante, ejercicio regular, reducción de peso, control de presión arterial y posible tratamiento con estatinas.'
    },
    {
        id: 'caso9',
        titulo: 'Coagulación Alterada en Anticoagulación',
        paciente: 'Hombre, 65 años, fibrilación auricular',
        sintomas: 'Mareos leves, moretones fáciles después de pequeños golpes',
        diagnostico: 'Terapia anticoagulante con warfarina y tiempo de coagulación prolongado',
        resultados: {
            'pt': '28 seg (alto)',
            'inr': '3.5 (alto)',
            'aptt': '38 seg (normal)',
            'plaquetas': '210 x 10³/μL (normal)',
            'hemoglobina': '13.9 g/dL (normal)'
        },
        interpretacion: 'El PT prolongado e INR alto muestran efecto anticoagulante terapéutico. El paciente corre riesgo de sangrado, pero las plaquetas y la hemoglobina están bien.',
        tratamiento: 'Ajustar dosis de anticoagulante, controlar INR regularmente y educar sobre signos de sangrado.'
    },
    {
        id: 'caso10',
        titulo: 'Deshidratación Aguda',
        paciente: 'Mujer, 30 años, diarrea intensa por gastroenteritis',
        sintomas: 'Sed intensa, mareo al ponerse de pie, orina oscura',
        diagnostico: 'Deshidratación hipernatrémica con hemoconcentración',
        resultados: {
            'hematocrito': '55% (alto)',
            'hemoglobina': '18.2 g/dL (alto)',
            'urea': '48 mg/dL (alto)',
            'sodio': '150 mEq/L (alto)',
            'glc-blancos': '14.0 x 10³/μL (alto)',
            'potasio': '5.2 mEq/L (alto)'
        },
        interpretacion: 'La elevación del hematocrito y hemoglobina junto con sodio alto sugiere deshidratación severa. El aumento de urea y leucocitos también refleja estrés corporal e hipovolemia.',
        tratamiento: 'Reposición de líquidos por vía oral o IV, control de electrolitos y tratamiento de la causa subyacente de la diarrea.'
    }
];

const calculadoraData = [
    {
        id: 'hemoglobina',
        nombre: 'Hemoglobina',
        unidad: 'g/dL',
        ejemplo: '13.2',
        referencias: {
            hombre: { min: 13.5, max: 17.5 },
            mujer: { min: 12.0, max: 15.5 },
            adulto: { min: 12.0, max: 17.5 }
        },
        mensajes: {
            alto: 'Valor alto. Puede sugerir deshidratación, policitemia o vivir en altitud elevada.',
            bajo: 'Valor bajo. Puede indicar anemia ferropénica, sangrado o deficiencia de hierro.',
            normal: 'Valor dentro del rango esperado para la mayoría de adultos.'
        }
    },
    {
        id: 'glucosa',
        nombre: 'Glucosa (Ayunas)',
        unidad: 'mg/dL',
        ejemplo: '95',
        referencias: {
            adulto: { min: 70, max: 100 }
        },
        mensajes: {
            alto: 'Valor alto. Puede indicar prediabetes o diabetes. Consulta con un profesional.',
            bajo: 'Valor bajo. Puede deberse a hipoglucemia por ayuno, medicamentos o ayuno prolongado.',
            normal: 'Valor dentro del rango esperado para una medición en ayunas.'
        }
    },
    {
        id: 'creatinina',
        nombre: 'Creatinina',
        unidad: 'mg/dL',
        ejemplo: '1.0',
        referencias: {
            hombre: { min: 0.7, max: 1.3 },
            mujer: { min: 0.6, max: 1.1 },
            adulto: { min: 0.6, max: 1.3 }
        },
        mensajes: {
            alto: 'Valor alto. Puede indicar disminución de función renal o deshidratación.',
            bajo: 'Valor bajo. Puede asociarse con menor masa muscular o embarazo.',
            normal: 'Valor dentro del rango esperado para función renal normal.'
        }
    },
    {
        id: 'lipidos-ldl',
        nombre: 'LDL (Colesterol Malo)',
        unidad: 'mg/dL',
        ejemplo: '90',
        referencias: {
            adulto: { min: 0, max: 100 }
        },
        mensajes: {
            alto: 'Valor alto. Aumenta el riesgo cardiovascular y puede requerir cambios dietéticos.',
            bajo: 'Valor dentro del rango saludable. Un LDL bajo es generalmente protector.',
            normal: 'Valor dentro del rango deseable para salud cardiovascular.'
        }
    },
    {
        id: 'trigliceridos',
        nombre: 'Triglicéridos',
        unidad: 'mg/dL',
        ejemplo: '130',
        referencias: {
            adulto: { min: 0, max: 150 }
        },
        mensajes: {
            alto: 'Valor alto. Puede indicar mala alimentación, obesidad o resistencia a la insulina.',
            bajo: 'Valor dentro del rango normal; suele verse en estilos de vida saludables.',
            normal: 'Valor dentro del rango esperado para ayuno.'
        }
    },
    {
        id: 'potasio',
        nombre: 'Potasio',
        unidad: 'mEq/L',
        ejemplo: '4.2',
        referencias: {
            adulto: { min: 3.5, max: 5.0 }
        },
        mensajes: {
            alto: 'Valor alto. Puede indicar problemas renales o desequilibrio electrolítico.',
            bajo: 'Valor bajo. Puede deberse a vómitos, diarrea o uso de diuréticos.',
            normal: 'Valor dentro del rango esperado para equilibrio electrolítico normal.'
        }
    },
    {
        id: 'plaquetas',
        nombre: 'Plaquetas',
        unidad: 'x 10³/μL',
        ejemplo: '220',
        referencias: {
            adulto: { min: 150, max: 400 }
        },
        mensajes: {
            alto: 'Valor alto. Puede indicar inflamación, estrés o ciertas enfermedades hematológicas.',
            bajo: 'Valor bajo. Puede estar asociado a riesgo de sangrado o enfermedad de la médula ósea.',
            normal: 'Valor dentro del rango esperado para coagulación normal.'
        }
    }
];

const glosarioData = [
    {
        termino: 'Hematocrito',
        definicion: 'Porcentaje de glóbulos rojos en el volumen total de sangre. Indica la capacidad de transporte de oxígeno.'
    },
    {
        termino: 'Hemoglobina',
        definicion: 'Proteína de los glóbulos rojos que lleva oxígeno desde los pulmones hacia los tejidos.'
    },
    {
        termino: 'VGM',
        definicion: 'Volumen Globular Medio. Mide el tamaño promedio de los glóbulos rojos y ayuda a clasificar anemias.'
    },
    {
        termino: 'Plaquetas',
        definicion: 'Fragmentos celulares que ayudan a coagular la sangre y detener hemorragias.'
    },
    {
        termino: 'Leucocitos',
        definicion: 'Glóbulos blancos que forman parte del sistema inmune y combaten infecciones.'
    },
    {
        termino: 'Creatinina',
        definicion: 'Residuos producidos por el músculo que el riñón filtra. Se usa para evaluar función renal.'
    },
    {
        termino: 'HDL',
        definicion: 'Colesterol bueno que ayuda a eliminar el exceso de colesterol de las arterias.'
    },
    {
        termino: 'LDL',
        definicion: 'Colesterol malo que puede depositarse en las paredes arteriales y aumentar el riesgo de infartos.'
    },
    {
        termino: 'Triglicéridos',
        definicion: 'Tipo de grasa en la sangre que sirve como reserva de energía, pero en exceso es dañina.'
    },
    {
        termino: 'PT/APTT',
        definicion: 'Pruebas que evalúan la velocidad de coagulación de la sangre y la función de los factores de coagulación.'
    }
];
