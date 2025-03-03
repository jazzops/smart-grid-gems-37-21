
# Smart Grid & Air Quality Dashboard - Instrukcja obsługi

## Spis treści
1. [Uruchomienie projektu](#uruchomienie-projektu)
2. [Główne funkcjonalności](#główne-funkcjonalności)
3. [Panel monitorowania jakości powietrza](#panel-monitorowania-jakości-powietrza)
4. [Asystent AI i przetwarzanie dokumentów](#asystent-ai-i-przetwarzanie-dokumentów)
5. [Mapy jakości powietrza w województwie pomorskim](#mapy-jakości-powietrza-w-województwie-pomorskim)
6. [Rozwiązywanie problemów](#rozwiązywanie-problemów)

## Uruchomienie projektu

### Wymagania wstępne
- Node.js (zalecana wersja 16 lub nowsza)
- npm (menedżer pakietów Node.js)
- Klucz API Google Gemini (dla funkcji asystenta AI)

### Instalacja
1. Sklonuj repozytorium:
   ```bash
   git clone <URL_REPOZYTORIUM>
   cd smart-grid-gems
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Skonfiguruj klucz API Gemini:
   Możesz to zrobić na dwa sposoby:
   - Kliknij ikonę kluczy w lewym górnym rogu interfejsu i wprowadź swój klucz API
   - Utwórz plik `.env` w głównym katalogu projektu i dodaj linię:
     ```
     VITE_GOOGLE_API_KEY=TWÓJ_KLUCZ_API
     ```

4. Uruchom projekt w trybie deweloperskim:
   ```bash
   npm run dev
   ```

5. Otwórz przeglądarkę i przejdź do adresu: `http://localhost:5173/`

## Główne funkcjonalności

### Nawigacja po systemie
- **Strona główna** - zawiera dashboard ze wskaźnikami zużycia energii i jakości powietrza
- **Zakładki nawigacyjne** - używaj zakładek na górze ekranu do przełączania między różnymi widokami:
  - **Przestrzenie** - główny dashboard z danymi
  - **Mapy jakości powietrza** - interaktywne mapy z danymi Airly
  - **Analiza** - szczegółowa analiza danych
  - **Status** - status urządzeń IoT
  - **Czujniki** - informacje z czujników
  - **Integracje** - opcje integracji z innymi systemami

### Personalizacja interfejsu
- **Tryb ciemny/jasny** - przełącznik w prawym górnym rogu
- **Zmiana języka** - wybór języka w prawym górnym rogu (polski, angielski, niemiecki, ukraiński, rosyjski)
- **Samouczek** - kliknij przycisk "Pokaż samouczek" w prawym dolnym rogu

### Eksport danych
- W zakładce "Przestrzenie" możesz eksportować widok do plików JPG lub PDF za pomocą przycisków na górze sekcji

## Panel monitorowania jakości powietrza

Panel główny zawiera:
- **Wykres jakości powietrza** - historyczne i bieżące dane o jakości powietrza
- **Status urządzeń** - informacje o stanie urządzeń w sieci
- **Mapa sieci** - wizualizacja sieci energetycznej
- **Analiza awarii** - dane dotyczące awarii i problemów
- **Mapa energetyczna** - geograficzna mapa zużycia energii

Możesz wchodzić w interakcję z kafelkami, aby zobaczyć szczegółowe informacje, a także przeciągać je, aby dostosować układ do swoich potrzeb.

## Asystent AI i przetwarzanie dokumentów

### Wgrywanie i analiza dokumentów
1. Przewiń na dół strony głównej do sekcji "Wgraj pliki"
2. Przeciągnij i upuść pliki lub kliknij obszar, aby wybrać dokumenty
3. Obsługiwane formaty: PDF, DOCX, TXT, PNG, JPG

### Korzystanie z asystenta AI
1. Po wgraniu dokumentu przejdź do sekcji "Asystent AI"
2. Wpisz pytanie dotyczące zawartości dokumentu lub zagadnień związanych z energią/jakością powietrza
3. Asystent wykorzysta zaawansowaną technologię RAG (Retrieval-Augmented Generation), aby udzielić odpowiedzi bazując na:
   - Wgranych dokumentach
   - Swojej wiedzy ogólnej
   - Danych kontekstowych systemu

Przykładowe pytania:
- "Podsumuj najważniejsze punkty z wgranego dokumentu"
- "Jakie są główne zanieczyszczenia powietrza i ich wpływ na zdrowie?"
- "Jak mogę zoptymalizować zużycie energii w moim domu?"

## Mapy jakości powietrza w województwie pomorskim

Zakładka "Mapy jakości powietrza" zawiera:
- Interaktywną mapę z danymi ze stacji pomiarowych Airly
- Legendę tłumaczącą kolorystykę oznaczeń
- Informacje o aktualnym stanie powietrza w wybranych lokalizacjach

Funkcje mapy:
1. **Przybliżanie i oddalanie** - użyj przycisków + i - lub kółka myszy
2. **Wybór stacji** - kliknij marker, aby zobaczyć szczegółowe dane
3. **Zmiana widoku mapy** - użyj kontrolek w prawym górnym rogu mapy

## Rozwiązywanie problemów

### Problemy z wczytywaniem mapy
Jeśli mapa nie wyświetla się poprawnie:
- Upewnij się, że masz stabilne połączenie z internetem
- Spróbuj odświeżyć stronę
- Wyczyść pamięć podręczną przeglądarki

### Problemy z asystentem AI
Jeśli asystent AI nie działa poprawnie:
- Sprawdź, czy wprowadziłeś poprawny klucz API Gemini
- Upewnij się, że masz połączenie z internetem
- Sprawdź wielkość wgranego dokumentu (maksymalny rozmiar to 10MB)
- Sprawdź w konsoli przeglądarki (F12) czy nie ma błędów

### Kontakt i wsparcie
Jeśli napotkasz problemy techniczne lub masz pytania dotyczące systemu:
- Sprawdź dokumentację techniczną
- Skontaktuj się z administratorem systemu

## Licencja i informacje dodatkowe

System Smart Grid & Air Quality Dashboard został opracowany jako narzędzie do monitorowania jakości powietrza. Wykorzystuje zaawansowane algorytmy AI do analizy danych i zapewnienia użytkownikom inteligentnego wsparcia w podejmowaniu decyzji.

---

© 2024 Smart Grid & Air Quality Dashboard


---


# System Architecture Documentation - Air Quality Monitoring Dashboard

## 1. Przegląd Systemu
System implementuje zaawansowany dashboard do monitorowania jakości powietrza i zarządzania siecią czujników pomiarowych w czasie rzeczywistym. Główne funkcjonalności obejmują:
- Monitorowanie jakości powietrza w czasie rzeczywistym
- Analiza trendów zanieczyszczeń
- Status czujników pomiarowych
- System alertów i powiadomień o przekroczeniach norm
- Integracja z sieciami pomiarowymi (Airly, GIOŚ)

## 2. Główne Komponenty

### Monitoring Powietrza (`src/components/dashboard/AirQualityChart.tsx`)
- Interaktywne wykresy zanieczyszczeń
- Możliwość przełączania między różnymi parametrami (PM2.5, PM10, NO2, etc.)
- System eksportu danych (PDF/JPG)
- Funkcje przybliżania i analizy szczegółowej
- **Punkty dostosowania:**
  ```typescript
  // Kolory wykresu dla różnych poziomów zanieczyszczeń
  <Line stroke="#34D399" /> // Dobre
  <Line stroke="#FBBF24" /> // Umiarkowane
  <Line stroke="#F59E0B" /> // Dostateczne
  <Line stroke="#EF4444" /> // Złe
  
  // Konfiguracja legendy
  <Legend 
    verticalAlign="bottom"
    height={36}
  />
  
  // Dostosowanie tooltipów
  <CustomTooltip />
  ```

### Statystyki Jakości Powietrza (`src/components/dashboard/AirQualityStats.tsx`)
- Karty z kluczowymi wskaźnikami
- Animowane wskaźniki jakości
- Wykresy trendów
- **Punkty dostosowania:**
  ```typescript
  // Progi jakości powietrza
  const getAirQualityColor = (pm25: number) => {
    if (pm25 <= 10) return "bg-green-500";
    if (pm25 <= 25) return "bg-yellow-500";
    if (pm25 <= 50) return "bg-orange-500";
    return "bg-red-500";
  };
  ```

### Status Czujników (`src/components/network/DeviceStatus.tsx`)
- Monitoring stacji pomiarowych
- Status czujników
- Parametry kalibracji
- **Punkty dostosowania:**
  ```typescript
  // Konfiguracja statusów
  const sensorStatuses = {
    online: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500"
  };
  ```

### Analiza Przekroczeń (`src/components/network/FailureAnalysis.tsx`)
- System wykrywania przekroczeń norm
- Rekomendacje działań prewencyjnych
- Historia alertów
- **Punkty dostosowania:**
  ```typescript
  // Priorytety alertów
  const priorityLevels = {
    high: { color: "red", icon: AlertTriangle },
    medium: { color: "yellow", icon: AlertCircle },
    low: { color: "blue", icon: Info }
  };
  ```

## 3. Przepływ Danych

### Monitoring w czasie rzeczywistym
```mermaid
graph TD
    A[Czujniki jakości powietrza] --> B[Agregacja Pomiarów]
    B --> C[Przetwarzanie]
    C --> D[Wizualizacja]
    D --> E[Dashboard]
    E --> F[System Alertów]
    F --> G[Powiadomienia]
```

### Analiza Jakości Powietrza
```mermaid
graph TD
    A[Dane Pomiarowe] --> B[Obliczenia AQI]
    B --> C[Analiza Trendów]
    C --> D[Predykcje]
    D --> E[Raporty]
    E --> F[Interfejs Użytkownika]
```

## 4. Kluczowe Technologie
- **Frontend**: React + TypeScript
  - Komponenty funkcyjne
  - Hooks dla logiki biznesowej
  - TypeScript dla bezpieczeństwa typów
- **Wizualizacja**: Recharts
  - Responsywne wykresy
  - Interaktywne elementy
  - Customizacja stylów
- **UI Framework**: Tailwind CSS + shadcn/ui
  - System projektowania
  - Komponenty wielokrotnego użytku
  - Responsywny układ
- **Animacje**: Framer Motion
  - Płynne przejścia
  - Interaktywne elementy
  - Animacje wykresów
- **Eksport Danych**: 
  - HTML2Canvas dla zrzutów ekranu
  - jsPDF dla dokumentów PDF

## 5. Architektura Danych

### Struktura Danych Pomiarowych
```typescript
interface AirQualityData {
  id: string;
  type: 'pm25' | 'pm10' | 'no2' | 'so2' | 'o3' | 'co';
  value: number;
  unit: string;
  timestamp: Date;
  status: 'good' | 'moderate' | 'poor' | 'hazardous';
}
```

### Format Alertów
```typescript
interface Alert {
  id: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
  sensorId: string;
  pollutant: string;
  threshold: number;
}
```

### Dane Historyczne
```typescript
interface HistoricalData {
  period: 'hour' | 'day' | 'week' | 'month';
  data: Array<{
    timestamp: Date;
    parameters: {
      pm25?: number;
      pm10?: number;
      no2?: number;
      so2?: number;
      o3?: number;
      co?: number;
    }
  }>;
}
```

## 6. Planowane Ulepszenia
1. **Zaawansowana Analityka**
   - Machine Learning dla predykcji jakości powietrza
   - Automatyczna detekcja anomalii w pomiarach
   - Korelacja z danymi meteorologicznymi

2. **Rozszerzone Możliwości Eksportu**
   - Nowe formaty raportów
   - Customizowane szablony
   - Automatyczne harmonogramy raportowania

3. **Ulepszona Wizualizacja**
   - Mapy cieplne zanieczyszczeń
   - Interaktywne dashboardy
   - Wizualizacje 3D rozkładu zanieczyszczeń

4. **Integracje**
   - API dla systemów zewnętrznych
   - Integracja z dodatkowymi sieciami pomiarowymi
   - Wsparcie dla różnych protokołów komunikacji

5. **Optymalizacja Wydajności**
   - Buforowanie danych pomiarowych
   - Optymalizacja zapytań
   - Progresywne ładowanie danych historycznych

## 7. Struktura Komponentów
```mermaid
graph TD
    A[Dashboard] --> B[AirQualityChart]
    A --> C[AirQualityStats]
    A --> D[DeviceStatus]
    A --> E[FailureAnalysis]
    
    B --> F[ChartControls]
    B --> G[ExportOptions]
    
    C --> H[StatCards]
    C --> I[TrendGraphs]
    
    D --> J[SensorList]
    D --> K[StatusIndicators]
    
    E --> L[AlertSystem]
    E --> M[RecommendationEngine]
    
    subgraph "Data Flow"
        N[RealTimeData] --> O[DataProcessor]
        O --> P[StateManager]
        P --> Q[UIComponents]
    end
```

## 8. Kluczowe Miejsca do Dostosowania

### Konfiguracja Czujników (`src/data/sensors/`)
```typescript
// Przykład konfiguracji czujnika
export const sensorConfig = {
  id: "1",
  location: "Gdańsk Główny",
  parameters: ["pm25", "pm10", "no2"],
  thresholds: {
    pm25: { warning: 25, alert: 50 },
    pm10: { warning: 50, alert: 100 },
    no2: { warning: 100, alert: 200 }
  }
};
```

### Komponenty UI (`src/components/ui/`)
```typescript
// Przykład customizacji komponentu
export const AirQualityCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
```

### Tłumaczenia (`src/i18n/translations/`)
```typescript
// Przykład dodania nowych tłumaczeń
export const translations = {
  pl: {
    airQuality: {
      title: "Panel monitorowania jakości powietrza",
      stats: "Statystyki",
      alerts: "Alerty",
      parameters: {
        pm25: "PM2.5",
        pm10: "PM10",
        no2: "NO₂"
      }
    }
  }
};
```

### Konfiguracja Wykresów (`src/components/dashboard/`)
```typescript
// Przykład konfiguracji wykresu jakości powietrza
const chartConfig = {
  colors: {
    good: "#34d399",
    moderate: "#fbbf24",
    poor: "#f59e0b",
    hazardous: "#ef4444"
  },
  animations: true,
  tooltip: {
    enabled: true,
    format: "wartość: {value} {unit}"
  }
};
```

### System Alertów (`src/components/network/`)
```typescript
// Przykład konfiguracji alertów jakości powietrza
const alertConfig = {
  thresholds: {
    pm25: { warning: 25, critical: 50 },
    pm10: { warning: 50, critical: 100 },
    no2: { warning: 100, critical: 200 },
    so2: { warning: 125, critical: 350 }
  },
  notifications: {
    email: true,
    push: true,
    sms: false
  }
};
```

