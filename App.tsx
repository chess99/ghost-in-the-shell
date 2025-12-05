import React, { useState } from 'react';
import { 
  Terminal, 
  GitBranch, 
  ArrowRight, 
  AlertCircle, 
  Layout, 
  Github, 
  Laptop, 
  Server,
  XCircle,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'status' | 'workflow' | 'solution'>('status');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="space-y-4 border-b border-slate-700 pb-6">
          <div className="flex items-center gap-3 text-indigo-400">
            <Layout className="w-8 h-8" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">环境诊断 & 工作流说明</h1>
          </div>
          <p className="text-slate-400 text-lg">
            回答你的疑问：为什么找不到终端？如何同步 GitHub 代码？
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-slate-800/50 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('status')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'status' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Terminal className="w-4 h-4" />
            当前环境限制
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'workflow' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            单向工作流图解
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'solution' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            推荐开发方式
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
          
          {activeTab === 'status' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <AlertCircle className="text-amber-400" />
                为什么没有终端 (Terminal)?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-300 font-medium">常规 IDE (VS Code)</span>
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex gap-2"><Server className="w-4 h-4 shrink-0" /> 运行在完整操作系统上 (Linux/Mac/Win)</li>
                    <li className="flex gap-2"><Terminal className="w-4 h-4 shrink-0" /> 有 Shell 访问权限 (bash/zsh)</li>
                    <li className="flex gap-2"><GitBranch className="w-4 h-4 shrink-0" /> 原生支持 git pull/push</li>
                  </ul>
                </div>

                <div className="bg-indigo-900/20 p-5 rounded-lg border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-indigo-300 font-medium">当前 AI Studio 环境</span>
                    <AlertCircle className="text-amber-500 w-5 h-5" />
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex gap-2"><Layout className="w-4 h-4 shrink-0" /> 这是一个浏览器内的沙盒 (Sandbox)</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 text-red-400" /> 没有后端 Shell/终端权限</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 shrink-0 text-red-400" /> 无法监听 GitHub 仓库的变动</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded text-sm text-slate-400 border-l-4 border-amber-500">
                <p>
                  <strong>总结：</strong> 你在这个网页上看到的是一个临时的、用于快速原型生成的“游乐场”。它主要用于展示 AI 生成的代码效果，而不是作为一个持久化的全功能开发环境。
                </p>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-white">代码同步机制：单向通道</h2>
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center space-y-3 z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-4 ring-indigo-900">
                    <Layout className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">1. AI Studio</h3>
                    <p className="text-xs text-slate-400 mt-1">生成 & 预览</p>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="flex-1 flex flex-col items-center gap-2 z-0">
                  <div className="h-1 w-full bg-gradient-to-r from-indigo-600 to-slate-600 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 px-2 text-xs text-indigo-400 font-mono">
                      Export / Push
                    </div>
                    <ArrowRight className="absolute right-0 -top-1.5 w-4 h-4 text-slate-600" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center space-y-3 z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-600">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">2. GitHub</h3>
                    <p className="text-xs text-slate-400 mt-1">代码仓库 (存储)</p>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="flex-1 flex flex-col items-center gap-2 z-0 opacity-50">
                  <div className="h-1 w-full bg-gradient-to-r from-slate-600 to-slate-700">
                     <ArrowRight className="absolute right-0 -top-1.5 w-4 h-4 text-slate-700" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center space-y-3 z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-600">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">3. 本地开发</h3>
                    <p className="text-xs text-slate-400 mt-1">VS Code / IDE</p>
                  </div>
                </div>
              </div>

              {/* The Problem visualization */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <XCircle className="w-24 h-24" />
                </div>
                <h3 className="text-red-300 font-semibold mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  断开的回路
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  如果你在 <strong>步骤 3 (本地)</strong> 修改了代码并推送到 <strong>GitHub</strong>，
                  <strong>步骤 1 (AI Studio)</strong> 是<span className="text-red-400 font-bold">不会</span>自动更新的。
                  这里的会话一旦创建，就是独立的。
                </p>
              </div>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-white">最佳实践流程</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">1</div>
                  <div>
                    <h3 className="font-medium text-white">在此处完成原型</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      利用 AI 的能力快速搭建 UI、调整逻辑，直到你对 80% - 90% 的功能满意为止。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white">2</div>
                  <div>
                    <h3 className="font-medium text-white">一次性导出 (Eject)</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      使用平台的 "Sync to GitHub" 或 "Download" 功能，将代码带走。这就是“毕业”时刻。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white">3</div>
                  <div>
                    <h3 className="font-medium text-white">在专业工具中继续</h3>
                    <p className="text-sm text-slate-400 mt-1">
                      之后的所有修改，请在 VS Code、Cursor 或 WebStorm 中进行。不要再试图回到这个临时页面来同步旧代码。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto">
                  <Github className="w-5 h-5" />
                  去 GitHub 继续开发 (模拟链接)
                </button>
                <p className="text-xs text-slate-500 mt-3">
                  点击上方按钮通常会带你去你在本平台配置好的仓库
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
