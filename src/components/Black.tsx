import React from 'react';
import { ArrowRight } from 'lucide-react';
import White from './White';

// Result Card Component
function ResultCard({ text, delay }: { text: string; delay: string }) {
  return (
    <li 
      className="flex items-center gap-3 text-emerald-700 bg-white p-6 rounded-lg shadow-sm 
        hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      style={{ 
        animation: 'slideRight 0.5s ease-out forwards',
        animationDelay: delay 
      }}
    >
      <ArrowRight className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <span className="font-medium">{text}</span>
    </li>
  );
}

export default function Black() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .prose p {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <White />

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Долгое время я даже не подозревала, что эта проблема может так испортить жизнь. Геморрой всегда казался чем-то далёким, почти вымышленным, о чём говорят только пожилые люди. Но всё началось неожиданно, с небольшого дискомфорта, который я списывала на сидячую работу и постоянное напряжение.
            </p>

            <div className="my-12 relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="https://sun9-80.userapi.com/impg/fdY7lBAQhEBWF7bWlNmYUH8Yy9_-XhEEfbpxLQ/jfFo42ZI8oY.jpg?size=1024x1024&quality=96&sign=46d44a6864f672658d4a60ab43d28f54&type=album"
                alt="Treatment results"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Сначала это было просто лёгкое неудобство, потом — лёгкий зуд и жжение, но вскоре ситуация стала намного хуже. Боль становилась всё сильнее, а её интенсивность — невыносимой.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Каждое утро я просыпалась в панике, заранее зная, что день принесёт новые мучения. Просто выйти на работу было испытанием, потому что боль начиналась с самого утра и не отпускала меня целый день.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl my-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Результат после применения Vitacaps:</h2>
              <ul className="space-y-4">
                <ResultCard text="Полное избавление от боли" delay="0ms" />
                <ResultCard text="Возвращение к активному образу жизни" delay="100ms" />
                <ResultCard text="Устранение дискомфорта" delay="200ms" />
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Через пару недель я уже могла вернуться к нормальной жизни. Я снова начала тренироваться, гулять по улице, встречаться с друзьями — без постоянной мысли о том, когда же наступит новый приступ.
            </p>

            <div className="bg-emerald-50 p-8 rounded-xl my-8 transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-emerald-900 font-semibold italic text-lg">
                "Vitacaps не просто избавил меня от боли — он вернул мне утраченную жизнь, мои привычки, радость от простых моментов, которые раньше я не могла себе позволить."
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Если вы сейчас в такой же ситуации — не ждите. Проблема может решиться быстрее, чем вы думаете.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}