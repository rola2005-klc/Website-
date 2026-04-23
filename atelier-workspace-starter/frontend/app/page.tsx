'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  PenSquare,
  Image as ImageIcon,
  Boxes,
  Search,
  FolderOpen,
  Clock3,
  Tag,
  Stars,
  Brain,
  Upload,
  ArrowUpRight,
  BookOpen,
  LayoutGrid,
  Heart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const writings = [
  {
    id: 1,
    title: '凌晨一点的想法',
    type: '随笔',
    feeling: '灵感',
    updated: '3 分钟前',
    tags: ['碎片', '个人', '夜晚'],
    preview: '我想要的不是一个普通主页，而是一个可以让我一打开就想开始创作的地方。',
  },
  {
    id: 2,
    title: '给未来作品集的草稿',
    type: '项目文字',
    feeling: '推进中',
    updated: '今天',
    tags: ['portfolio', 'draft'],
    preview: '这个网站应该能同时装下文字、图像、实验和还不成熟的小模型。',
  },
  {
    id: 3,
    title: '春天的颜色记录',
    type: '观察笔记',
    feeling: '平静',
    updated: '昨天',
    tags: ['视觉', '灵感采样'],
    preview: '我最近喜欢偏雾感的绿色和有一点颗粒感的奶油白，它们很像慢慢展开的画布。',
  },
];

const gallery = [
  { id: 1, title: 'Untitled Study 01', medium: 'digital painting', series: 'soft archive' },
  { id: 2, title: 'Blue Room', medium: 'illustration', series: 'memory fragments' },
  { id: 3, title: 'Field Notes', medium: 'mixed media', series: 'observations' },
];

const models = [
  {
    id: 1,
    name: 'mood-tagger-v1',
    kind: 'text classifier',
    status: 'experiment',
    desc: '自动根据内容给文字打上情绪和主题标签。',
  },
  {
    id: 2,
    name: 'image-palette-finder',
    kind: 'vision utility',
    status: 'prototype',
    desc: '从你的画作里提取颜色，并生成系列归档建议。',
  },
];

function StatCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <Card className="bg-white/70 backdrop-blur">
      <CardContent className="p-5">
        <div className="text-sm text-zinc-500">{title}</div>
        <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">{value}</div>
        <div className="mt-1 text-sm text-zinc-500">{sub}</div>
      </CardContent>
    </Card>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={active ? 'rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white' : 'rounded-xl px-4 py-2 text-sm text-zinc-600'}
    >
      {children}
    </button>
  );
}

export default function Page() {
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState('今天想写点什么？可以是突然冒出来的一句话，也可以是某个作品未来会长成的样子。');
  const [tab, setTab] = useState<'writing' | 'gallery' | 'models'>('writing');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return writings;
    return writings.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.preview.toLowerCase().includes(q) ||
        w.tags.join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(226,232,240,0.9),_rgba(250,250,249,1)_35%,_rgba(245,245,244,1)_70%)] text-zinc-900">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:px-6 lg:grid-cols-[250px_minmax(0,1fr)_330px]">
        <motion.aside initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="rounded-[28px] border border-zinc-200/70 bg-white/75 p-4 shadow-sm backdrop-blur">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
              <Stars className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-400">personal studio</div>
              <div className="text-lg font-semibold">Atelier</div>
            </div>
          </div>

          <div className="space-y-2">
            {[
              [LayoutGrid, '工作台'],
              [PenSquare, '随笔与草稿'],
              [ImageIcon, '画作档案'],
              [Boxes, '模型与实验'],
              [FolderOpen, '自动归类'],
            ].map(([Icon, label]) => {
              const Cmp = Icon as typeof LayoutGrid;
              return (
                <button key={label} className={label === '工作台' ? 'flex w-full items-center gap-3 rounded-2xl bg-zinc-900 px-3 py-3 text-left text-white' : 'flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-zinc-600 transition hover:bg-zinc-100'}>
                  <Cmp className="h-4 w-4" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-700 p-4 text-white">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Sparkles className="h-4 w-4" /> AI 陪伴
            </div>
            <div className="mt-2 text-lg font-semibold">像创作搭子一样陪你</div>
            <p className="mt-2 text-sm text-white/80">帮你命名、总结、推荐标签，也可以在你卡住的时候给你一个继续写下去的提示。</p>
            <Button className="mt-4 w-full bg-white text-zinc-900 hover:bg-zinc-100">打开创作助手</Button>
          </div>
        </motion.aside>

        <main className="space-y-6">
          <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-[32px] border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs text-zinc-500">
                  <Heart className="h-3.5 w-3.5" /> a beautiful workspace for writing, art, and experiments
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                  一个可以一直长大的
                  <span className="block italic text-zinc-500">个人创作空间</span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 md:text-base">这里不只是主页，而是你的工作台：随时写随笔、上传画作、收纳模型实验，并自动整理成清晰的个人档案。</p>
              </div>

              <div className="flex w-full max-w-md items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
                <Search className="h-4 w-4 text-zinc-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜索你的文字、标签、灵感..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>
          </motion.section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <StatCard title="文字草稿" value="28" sub="自动归到 随笔 / 项目 / 灵感" />
            <StatCard title="画作档案" value="14" sub="按系列、媒介、年份、颜色管理" />
            <StatCard title="模型实验" value="5" sub="支持 demo、说明、版本记录" />
          </section>

          <div className="rounded-2xl bg-white/80 p-1 shadow-sm">
            <div className="grid w-full grid-cols-3">
              <TabButton active={tab === 'writing'} onClick={() => setTab('writing')}>写作工作台</TabButton>
              <TabButton active={tab === 'gallery'} onClick={() => setTab('gallery')}>画作空间</TabButton>
              <TabButton active={tab === 'models'} onClick={() => setTab('models')}>模型实验区</TabButton>
            </div>
          </div>

          {tab === 'writing' && (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><PenSquare className="h-5 w-5" /> 今日创作</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="给这篇内容起个名字..." />
                  <Textarea value={draft} onChange={(e) => setDraft(e.target.value)} className="min-h-[300px]" />
                  <div className="flex flex-wrap gap-2">
                    <Badge># 自动识别主题</Badge>
                    <Badge># 情绪标签</Badge>
                    <Badge># 可转为作品说明</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button>保存草稿</Button>
                    <Button variant="outline">让 AI 帮我整理</Button>
                    <Button variant="outline">生成系列归档</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> 最近文字</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {filtered.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-4 transition hover:shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-medium text-zinc-900">{item.title}</h3>
                          <div className="mt-1 flex flex-wrap gap-2 text-xs text-zinc-500">
                            <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {item.type}</span>
                            <span>{item.feeling}</span>
                            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {item.updated}</span>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-600">{item.preview}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag}>#{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {tab === 'gallery' && (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {gallery.map((work, i) => (
                  <motion.div key={work.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Card className="overflow-hidden">
                      <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-zinc-100 via-stone-50 to-zinc-200">
                        <div className="text-center text-zinc-400">
                          <ImageIcon className="mx-auto h-10 w-10" />
                          <div className="mt-2 text-sm">作品预览位</div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="font-medium">{work.title}</div>
                        <div className="mt-1 text-sm text-zinc-500">{work.medium}</div>
                        <Badge className="mt-3">{work.series}</Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="border-dashed border-zinc-300 bg-white/70">
                <CardContent className="flex flex-col items-center justify-center gap-3 p-10 text-center">
                  <Upload className="h-8 w-8 text-zinc-400" />
                  <div className="text-lg font-medium">上传新的画作或系列</div>
                  <p className="max-w-md text-sm text-zinc-500">上传后可自动提取标题、媒介、系列、颜色风格，也可以保留你自己手动定义的命名方式。</p>
                  <Button>上传作品</Button>
                </CardContent>
              </Card>
            </>
          )}

          {tab === 'models' && (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Boxes className="h-5 w-5" /> 模型与实验</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {models.map((model) => (
                    <div key={model.id} className="rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-medium text-zinc-900">{model.name}</div>
                          <div className="mt-1 text-sm text-zinc-500">{model.kind} · {model.status}</div>
                          <p className="mt-3 text-sm leading-6 text-zinc-600">{model.desc}</p>
                        </div>
                        <Badge>{model.status}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" /> AI Studio Helper</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-white/85">
                  <p>它不替你创作，但会陪你把内容整理得更好。</p>
                  <div className="space-y-2 rounded-2xl bg-white/10 p-4">
                    <div>• 自动判断这是随笔、项目、作品说明还是实验记录</div>
                    <div>• 给上传的内容推荐标签和归档位置</div>
                    <div>• 帮你把草稿扩成简介、作品 statement 或展示文案</div>
                  </div>
                  <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100">试试陪伴模式</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </main>

        <motion.aside initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>自动归类逻辑</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-600">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="font-medium text-zinc-900">文字</div>
                <div className="mt-1">按主题、情绪、系列、时间自动整理。</div>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="font-medium text-zinc-900">画作</div>
                <div className="mt-1">按媒介、尺寸、系列、配色归档。</div>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="font-medium text-zinc-900">模型</div>
                <div className="mt-1">按版本、用途、输入输出、演示链接管理。</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>推荐网站结构</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-600">
              <div>首页 / Workspace</div>
              <div>Writing Archive</div>
              <div>Art Gallery</div>
              <div>Models Lab</div>
              <div>About / Identity</div>
            </CardContent>
          </Card>
        </motion.aside>
      </div>
    </div>
  );
}
