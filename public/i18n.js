const languages={pl:'Polski',en:'English',es:'Español',de:'Deutsch',zh:'简体中文',it:'Italiano',fr:'Français'};
const locales={pl:'pl-PL',en:'en-GB',es:'es-ES',de:'de-DE',zh:'zh-CN',it:'it-IT',fr:'fr-FR'};
const dictionary={};
const rows=`
calendar|Kalendarz|Calendar|Calendario|Kalender|日历|Calendario|Calendrier
focus|Mój dzień|My day|Mi día|Mein Tag|我的一天|La mia giornata|Ma journée
list|Cele|Goals|Objetivos|Ziele|目标|Obiettivi|Objectifs
stats|Postęp|Progress|Progreso|Fortschritt|进度|Progressi|Progrès
settings|Ustawienia|Settings|Ajustes|Einstellungen|设置|Impostazioni|Réglages
profile|Profil|Profile|Perfil|Profil|个人资料|Profilo|Profil
name|Nazwa|Name|Nombre|Name|名称|Nome|Nom
language|Język|Language|Idioma|Sprache|语言|Lingua|Langue
theme|Wygląd|Appearance|Apariencia|Darstellung|外观|Aspetto|Apparence
auto|Systemowy|System|Sistema|System|跟随系统|Sistema|Système
light|Jasny|Light|Claro|Hell|浅色|Chiaro|Clair
dark|Ciemny|Dark|Oscuro|Dunkel|深色|Scuro|Sombre
new|Nowy cel|New goal|Nuevo objetivo|Neues Ziel|新目标|Nuovo obiettivo|Nouvel objectif
edit|Edytuj cel|Edit goal|Editar objetivo|Ziel bearbeiten|编辑目标|Modifica obiettivo|Modifier l’objectif
week|Tydzień|Week|Semana|Woche|周|Settimana|Semaine
weekly|Plan tygodnia|Your weekly plan|Tu plan semanal|Dein Wochenplan|每周计划|Il tuo piano settimanale|Votre semaine
subtitle|Małe kroki. Więcej przestrzeni.|Small steps. More breathing room.|Pequeños pasos. Más espacio.|Kleine Schritte. Mehr Freiraum.|小步前进，轻松生活。|Piccoli passi. Più spazio.|Petits pas. Plus de sérénité.
today|Dziś|Today|Hoy|Heute|今天|Oggi|Aujourd’hui
prev|Poprzedni tydzień|Previous week|Semana anterior|Vorherige Woche|上一周|Settimana precedente|Semaine précédente
next|Następny tydzień|Next week|Próxima semana|Nächste Woche|下一周|Prossima settimana|Semaine suivante
empty|Tu jest miejsce na Twój kolejny krok.|Room for your next step.|Espacio para tu próximo paso.|Platz für deinen nächsten Schritt.|为下一步留出空间。|Spazio per il prossimo passo.|Une place pour votre prochain pas.
all|Wszystkie|All|Todos|Alle|全部|Tutti|Tous
unscheduled|Bez terminu|Unscheduled|Sin fecha|Ohne Termin|未安排|Senza data|Sans date
pending|Do zrobienia|To do|Pendientes|Offen|待完成|Da fare|À faire
done|Wykonane|Completed|Completados|Erledigt|已完成|Completati|Terminés
search|Szukaj celów, kategorii, notatek…|Search goals, categories, notes…|Buscar objetivos, categorías, notas…|Ziele, Kategorien, Notizen suchen…|搜索目标、类别、笔记…|Cerca obiettivi, categorie, note…|Rechercher objectifs, catégories, notes…
category|Kategoria|Category|Categoría|Kategorie|类别|Categoria|Catégorie
color|Kolor kategorii|Category colour|Color de categoría|Kategoriefarbe|类别颜色|Colore categoria|Couleur de catégorie
date|Data rozpoczęcia|Start date|Fecha de inicio|Startdatum|开始日期|Data di inizio|Date de début
time|Godzina|Time|Hora|Uhrzeit|时间|Ora|Heure
priority|Priorytet|Priority|Prioridad|Priorität|优先级|Priorità|Priorité
normal|Zwykły|Normal|Normal|Normal|普通|Normale|Normal
high|Wysoki|High|Alta|Hoch|高|Alta|Haute
note|Notatki|Notes|Notas|Notizen|笔记|Note|Notes
save|Zapisz|Save|Guardar|Speichern|保存|Salva|Enregistrer
cancel|Zamknij|Close|Cerrar|Schließen|关闭|Chiudi|Fermer
delete|Usuń|Delete|Eliminar|Löschen|删除|Elimina|Supprimer
duplicate|Powiel|Duplicate|Duplicar|Duplizieren|复制|Duplica|Dupliquer
confirmDelete|Usunąć cel wraz z historią?|Delete this goal and its history?|¿Eliminar este objetivo y su historial?|Ziel und Verlauf löschen?|删除此目标及其记录？|Eliminare obiettivo e cronologia?|Supprimer cet objectif et son historique ?
saved|Zapisano|Saved|Guardado|Gespeichert|已保存|Salvato|Enregistré
error|Nie udało się zapisać. Wyeksportuj kopię danych.|Could not save. Export a backup.|No se pudo guardar. Exporta una copia.|Speichern fehlgeschlagen. Sicherung exportieren.|保存失败，请导出备份。|Salvataggio non riuscito. Esporta una copia.|Échec de l’enregistrement. Exportez une sauvegarde.
measure|Sposób pomiaru|Measurement|Medición|Messung|衡量方式|Misurazione|Mesure
binary|Odhaczenie|Checkbox|Casilla|Abhaken|勾选|Spunta|Case à cocher
number|Liczba|Number|Número|Zahl|数值|Numero|Nombre
percent|Procent|Percentage|Porcentaje|Prozent|百分比|Percentuale|Pourcentage
target|Wartość docelowa|Target value|Valor objetivo|Zielwert|目标值|Valore obiettivo|Valeur cible
unit|Jednostka (kg, min, strony, l)|Unit (kg, min, pages, l)|Unidad (kg, min, páginas, l)|Einheit (kg, Min., Seiten, l)|单位（kg、分钟、页、l）|Unità (kg, min, pagine, l)|Unité (kg, min, pages, l)
schedule|Harmonogram|Schedule|Frecuencia|Zeitplan|计划|Frequenza|Fréquence
once|Jednorazowo|Once|Una vez|Einmalig|一次|Una volta|Une fois
daily|Codziennie|Every day|Cada día|Täglich|每天|Ogni giorno|Chaque jour
weekdays|Dni robocze|Weekdays|Días laborables|Werktags|工作日|Giorni feriali|Jours ouvrés
alternate|Co drugi dzień|Every other day|Cada dos días|Jeden zweiten Tag|隔天|A giorni alterni|Un jour sur deux
weeklyN|N razy w tygodniu|N times a week|N veces por semana|N-mal pro Woche|每周 N 次|N volte a settimana|N fois par semaine
frequency|Ile razy w tygodniu (1–7)|Times per week (1–7)|Veces por semana (1–7)|Pro Woche (1–7)|每周次数（1–7）|Volte a settimana (1–7)|Fois par semaine (1–7)
steps|Etapy — po jednym w wierszu|Milestones — one per line|Etapas — una por línea|Meilensteine — einer pro Zeile|里程碑：每行一个|Traguardi — uno per riga|Étapes — une par ligne
photo|Zdjęcie (maks. 1 MB)|Photo (max. 1 MB)|Foto (máx. 1 MB)|Foto (max. 1 MB)|照片（最大 1 MB）|Foto (max. 1 MB)|Photo (max. 1 Mo)
removePhoto|Usuń zdjęcie|Remove photo|Eliminar foto|Foto entfernen|删除照片|Rimuovi foto|Supprimer la photo
photoError|Wybierz zdjęcie JPEG, PNG lub WebP do 1 MB.|Choose a JPEG, PNG or WebP up to 1 MB.|Elige JPEG, PNG o WebP de hasta 1 MB.|JPEG, PNG oder WebP bis 1 MB wählen.|请选择不超过 1 MB 的 JPEG、PNG 或 WebP。|Scegli JPEG, PNG o WebP fino a 1 MB.|Choisissez un JPEG, PNG ou WebP de 1 Mo max.
context|Po jakiej czynności? / Miejsce|After which activity? / Place|¿Después de qué actividad? / Lugar|Nach welcher Aktivität? / Ort|在什么活动之后？/ 地点|Dopo quale attività? / Luogo|Après quelle activité ? / Lieu
contextHint|Wskazówka w aplikacji, bez automatycznego wykrywania.|An in-app cue, without automatic detection.|Una pista en la app, sin detección automática.|Hinweis in der App, ohne automatische Erkennung.|应用内提示，不自动检测。|Un suggerimento nell’app, senza rilevamento automatico.|Un repère dans l’app, sans détection automatique.
reminder|Przypomnienie w kalendarzu|Calendar reminder|Recordatorio de calendario|Kalendererinnerung|日历提醒|Promemoria calendario|Rappel calendrier
reminderHint|Pobierz plik i dodaj go do kalendarza. Przypomnienie 10 min wcześniej.|Download and add to your calendar. Reminder 10 min before.|Descarga y añade a tu calendario. Aviso 10 min antes.|Herunterladen und zum Kalender hinzufügen. Erinnerung 10 Min. vorher.|下载并添加到日历，提前10分钟提醒。|Scarica e aggiungi al calendario. Avviso 10 min prima.|Téléchargez et ajoutez au calendrier. Rappel 10 min avant.
quick|Szybki zapis|Quick check-in|Registro rápido|Schneller Eintrag|快速记录|Registrazione rapida|Saisie rapide
value|Wynik|Value|Valor|Wert|数值|Valore|Valeur
log|Zapis postępu|Progress entry|Registro de progreso|Fortschrittseintrag|进度记录|Registrazione progressi|Saisie du progrès
completed|Wykonano|Completed|Completado|Erledigt|已完成|Completato|Terminé
streak|Seria dni|Day streak|Racha de días|Tagesserie|连续天数|Serie di giorni|Série de jours
freeze|Zaplanuj przerwę|Plan a rest day|Planificar descanso|Ruhetag planen|计划休息日|Pianifica una pausa|Prévoir une pause
freezeHint|Dzień przerwy chroni serię, ale nie zalicza celów.|A rest day protects your streak without completing goals.|Un descanso protege la racha sin completar objetivos.|Ein Ruhetag schützt die Serie, ohne Ziele abzuschließen.|休息日保留连续记录，但不算完成目标。|Una pausa protegge la serie senza completare obiettivi.|Une pause protège la série sans valider d’objectifs.
rest|Przerwa|Rest|Descanso|Pause|休息|Pausa|Pause
trend|Trend — 8 tygodni|Trend — 8 weeks|Tendencia — 8 semanas|Trend — 8 Wochen|趋势 — 8 周|Tendenza — 8 settimane|Tendance — 8 semaines
heatmap|Regularność — 12 tygodni|Consistency — 12 weeks|Constancia — 12 semanas|Regelmäßigkeit — 12 Wochen|规律性 — 12 周|Costanza — 12 settimane|Régularité — 12 semaines
history|Historia pomiarów|Measurement history|Historial de mediciones|Messverlauf|测量记录|Cronologia misurazioni|Historique des mesures
noHistory|Zapisz pierwszy wynik, aby zobaczyć trend.|Log your first value to see a trend.|Registra tu primer valor para ver la tendencia.|Ersten Wert erfassen, um einen Trend zu sehen.|记录第一个数值以查看趋势。|Registra il primo valore per vedere la tendenza.|Saisissez une première valeur pour voir la tendance.
byCategory|Według kategorii|By category|Por categoría|Nach Kategorie|按类别|Per categoria|Par catégorie
backup|Dane i kopie zapasowe|Data & backups|Datos y copias|Daten & Sicherungen|数据和备份|Dati e backup|Données et sauvegardes
sync|Synchronizuj teraz|Sync now|Sincronizar ahora|Jetzt synchronisieren|立即同步|Sincronizza ora|Synchroniser
synced|Zapisano w chmurze|Saved to cloud|Guardado en la nube|In der Cloud gespeichert|已保存到云端|Salvato nel cloud|Enregistré dans le cloud
offline|Offline — dane na urządzeniu|Offline — saved on device|Sin conexión — datos locales|Offline — lokal gespeichert|离线 — 已保存到设备|Offline — dati sul dispositivo|Hors ligne — données locales
syncing|Synchronizacja…|Syncing…|Sincronizando…|Synchronisierung…|正在同步…|Sincronizzazione…|Synchronisation…
syncError|Chmura niedostępna — dane na urządzeniu|Cloud unavailable — saved on device|Nube no disponible — datos locales|Cloud nicht verfügbar — lokal gespeichert|云端不可用 — 已保存到设备|Cloud non disponibile — dati locali|Cloud indisponible — données locales
conflict|Dane zmieniły się na innym urządzeniu. Pobierz kopię lokalną i wybierz wersję.|Data changed on another device. Download a local backup and choose a version.|Los datos cambiaron en otro dispositivo. Descarga una copia local y elige una versión.|Daten wurden auf einem anderen Gerät geändert. Lokale Sicherung laden und Version wählen.|数据已在另一设备更改。请下载本地备份并选择版本。|Dati modificati su un altro dispositivo. Scarica una copia locale e scegli una versione.|Données modifiées sur un autre appareil. Téléchargez une copie locale et choisissez une version.
useCloud|Wczytaj wersję z chmury|Load cloud version|Cargar versión de la nube|Cloud-Version laden|加载云端版本|Carica versione cloud|Charger la version cloud
keepLocal|Zapisz lokalną wersję w chmurze|Save local version to cloud|Guardar versión local en la nube|Lokale Version in Cloud speichern|将本地版本保存到云端|Salva versione locale nel cloud|Enregistrer la version locale dans le cloud
export|Eksport CSV|Export CSV|Exportar CSV|CSV exportieren|导出 CSV|Esporta CSV|Exporter CSV
exportJson|Pobierz pełną kopię JSON|Download full JSON backup|Descargar copia JSON completa|Vollständige JSON-Sicherung laden|下载完整 JSON 备份|Scarica backup JSON completo|Télécharger la sauvegarde JSON
import|Przywróć kopię JSON|Restore JSON backup|Restaurar copia JSON|JSON-Sicherung wiederherstellen|恢复 JSON 备份|Ripristina backup JSON|Restaurer une sauvegarde JSON
importConfirm|Zastąpić dane na tym urządzeniu? Najpierw pobierz kopię.|Replace data on this device? Download a backup first.|¿Reemplazar datos locales? Descarga una copia antes.|Lokale Daten ersetzen? Zuerst Sicherung laden.|替换此设备上的数据？请先下载备份。|Sostituire i dati locali? Prima scarica una copia.|Remplacer les données locales ? Téléchargez d’abord une copie.
invalid|Nieprawidłowy plik kopii.|Invalid backup file.|Archivo de copia no válido.|Ungültige Sicherungsdatei.|备份文件无效。|File di backup non valido.|Fichier de sauvegarde invalide.
account|Dostęp przez konto ChatGPT|Access via your ChatGPT account|Acceso con tu cuenta ChatGPT|Zugang über dein ChatGPT-Konto|通过 ChatGPT 账户访问|Accesso con account ChatGPT|Accès via votre compte ChatGPT
logout|Wyloguj|Sign out|Cerrar sesión|Abmelden|退出登录|Esci|Se déconnecter
install|Na iPhonie: Safari → Udostępnij → Do ekranu początkowego.|On iPhone: Safari → Share → Add to Home Screen.|En iPhone: Safari → Compartir → Añadir a inicio.|Auf dem iPhone: Safari → Teilen → Zum Home-Bildschirm.|iPhone：Safari → 分享 → 添加到主屏幕。|Su iPhone: Safari → Condividi → Aggiungi a Home.|Sur iPhone : Safari → Partager → Sur l’écran d’accueil.
widgetHint|Szybki panel działa w aplikacji. Natywne widżety iOS nie są dostępne.|Quick panel works in the app. Native iOS widgets are unavailable.|El panel rápido funciona en la app. Sin widgets nativos de iOS.|Schnellpanel in der App. Native iOS-Widgets sind nicht verfügbar.|快速面板在应用内使用，暂无 iOS 原生小组件。|Pannello rapido nell’app. Widget iOS nativi non disponibili.|Panneau rapide dans l’app. Widgets iOS natifs indisponibles.
swipe|Przesuń w lewo, aby otworzyć Mój dzień|Swipe left to open My day|Desliza a la izquierda para abrir Mi día|Nach links zu Mein Tag wischen|向左滑动打开我的一天|Scorri a sinistra per La mia giornata|Balayez à gauche pour Ma journée
work|Praca|Work|Trabajo|Arbeit|工作|Lavoro|Travail
health|Zdrowie|Health|Salud|Gesundheit|健康|Salute|Santé
growth|Rozwój|Growth|Desarrollo|Entwicklung|成长|Crescita|Développement
personal|Osobiste|Personal|Personal|Persönlich|个人|Personale|Personnel
remaining|Pozostałe|Remaining|Restantes|Verbleibend|剩余|Rimanenti|Restants
undo|Cofnij|Undo|Deshacer|Rückgängig|撤销|Annulla|Annuler
move|Przenieś na inny dzień|Move to another day|Mover a otro día|Auf anderen Tag verschieben|移到其他日期|Sposta a un altro giorno|Déplacer à un autre jour
weeklyHint|Wykonaj cel w dowolnych N dniach tygodnia.|Complete on any N days of the week.|Completa en N días de la semana.|An beliebigen N Tagen pro Woche erledigen.|在一周内任意 N 天完成。|Completa in N giorni della settimana.|Réalisez l’objectif sur N jours de la semaine.
`;
rows.trim().split('\n').forEach(row=>{const [key,...values]=row.split('|');Object.keys(languages).forEach((lang,i)=>(dictionary[lang]??={})[key]=values[i])});
let lang=localStorage.getItem('goal-trackr.lang')||'pl';if(!languages[lang])lang='pl';
const tr=k=>dictionary[lang][k]||k;
const extraRows=`
details|Więcej opcji|More options|Más opciones|Weitere Optionen|更多选项|Altre opzioni|Plus d’options
calendarView|Układ kalendarza|Calendar layout|Vista del calendario|Kalenderansicht|日历布局|Vista calendario|Vue du calendrier
day|Dzień|Day|Día|Tag|日|Giorno|Jour
agenda|Lista tygodnia|Weekly agenda|Agenda semanal|Wochenagenda|每周列表|Agenda settimanale|Agenda de la semaine
board|Siatka tygodnia|Week board|Cuadrícula semanal|Wochenraster|每周网格|Griglia settimanale|Grille hebdomadaire
month|Miesiąc|Month|Mes|Monat|月|Mese|Mois
feedback|Dźwięk i wibracje|Sound & haptics|Sonido y vibración|Ton & Vibration|声音与振动|Suono e vibrazione|Son et vibrations
off|Wyłączone|Off|Desactivado|Aus|关闭|Disattivati|Désactivés
sound|Dźwięk|Sound|Sonido|Ton|声音|Suono|Son
haptic|Wibracje|Vibration|Vibración|Vibration|振动|Vibrazione|Vibrations
both|Dźwięk i wibracje|Sound and vibration|Sonido y vibración|Ton und Vibration|声音与振动|Suono e vibrazione|Son et vibrations
feedbackHint|Dźwięk działa po dotknięciu. Wibracje zależą od urządzenia; Safari na iOS może ich nie obsługiwać.|Sound plays after a tap. Vibration depends on the device; iOS Safari may not support it.|El sonido se activa al tocar. La vibración depende del dispositivo; Safari iOS puede no admitirla.|Ton nach Antippen. Vibration ist geräteabhängig; iOS Safari unterstützt sie möglicherweise nicht.|点击后播放声音。振动取决于设备，iOS Safari可能不支持。|Suono dopo un tocco. Vibrazione secondo il dispositivo; Safari iOS potrebbe non supportarla.|Son après un toucher. Vibrations selon l’appareil ; Safari iOS peut ne pas les prendre en charge.
focusHint|Jeden krok naraz. Zacznij od najważniejszego.|One step at a time. Start with what matters.|Paso a paso. Empieza por lo importante.|Ein Schritt nach dem anderen. Beginne mit dem Wichtigsten.|一步一步，从最重要的事开始。|Un passo alla volta. Inizia da ciò che conta.|Un pas à la fois. Commencez par l’essentiel.
goalsHint|Twoje pomysły, plany i następne kroki — w jednym miejscu.|Your ideas, plans and next steps, all in one place.|Tus ideas, planes y próximos pasos en un lugar.|Deine Ideen, Pläne und nächsten Schritte an einem Ort.|你的想法、计划和下一步，尽在一处。|Idee, piani e prossimi passi in un unico posto.|Vos idées, projets et prochaines étapes réunis.
localMode|Wersja portfolio — dane tylko w tej przeglądarce, bez konta i synchronizacji w chmurze.|Portfolio edition — data stays in this browser; no account or cloud sync.|Versión portfolio: datos en este navegador, sin cuenta ni sincronización.|Portfolio-Version: Daten nur in diesem Browser, ohne Konto oder Cloud-Sync.|作品集版本：数据仅保存在此浏览器中，无账户或云同步。|Versione portfolio: dati nel browser, senza account o cloud.|Version portfolio : données dans ce navigateur, sans compte ni synchronisation cloud.
`;
extraRows.trim().split('\n').forEach(row=>{const [key,...values]=row.split('|');Object.keys(languages).forEach((lang,i)=>dictionary[lang][key]=values[i])});
