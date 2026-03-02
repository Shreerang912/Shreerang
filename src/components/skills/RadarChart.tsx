import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { SKILLS } from '@/lib/skills';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart() {
  const chartRef = useRef<ChartJS<"radar">>(null);

  useEffect(() => {
    const updateChartColors = () => {
      if (!chartRef.current) return;
      const style = getComputedStyle(document.documentElement);
      const line = style.getPropertyValue('--chart-line').trim() || '#4a9eff';
      const fill = style.getPropertyValue('--chart-fill').trim() || 'rgba(74, 158, 255, 0.15)';
      const grid = style.getPropertyValue('--grid').trim() || 'rgba(255, 255, 255, 0.1)';
      const text = style.getPropertyValue('--muted').trim() || '#888';

      const chart = chartRef.current;
      if (chart.data.datasets[0]) {
        chart.data.datasets[0].borderColor = line;
        chart.data.datasets[0].backgroundColor = fill;
        chart.data.datasets[0].pointBackgroundColor = line;
      }
      
      if (chart.options.scales?.r) {
        if (chart.options.scales.r.grid) {
          chart.options.scales.r.grid.color = grid;
        }
        if (chart.options.scales.r.angleLines) {
          chart.options.scales.r.angleLines.color = grid;
        }
        if (chart.options.scales.r.pointLabels) {
          chart.options.scales.r.pointLabels.color = text;
        }
        if (chart.options.scales.r.ticks) {
          chart.options.scales.r.ticks.backdropColor = 'transparent';
          chart.options.scales.r.ticks.color = text;
        }
      }
      chart.update();
    };

    updateChartColors();
    
    // Create an observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateChartColors();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const data = {
    labels: SKILLS.map(s => s.label),
    datasets: [
      {
        label: 'Proficiency',
        data: SKILLS.map(s => s.level),
        borderColor: '#4a9eff',
        backgroundColor: 'rgba(74, 158, 255, 0.15)',
        pointBackgroundColor: '#4a9eff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4a9eff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: {
          color: '#888',
          font: { family: 'JetBrains Mono', size: 11 },
        },
        ticks: {
          display: false,
          min: 0,
          max: 100,
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: { family: 'Inter', size: 13 },
        bodyFont: { family: 'JetBrains Mono', size: 12 },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full aspect-square max-w-md mx-auto relative">
      <Radar ref={chartRef} data={data} options={options} />
    </div>
  );
}
