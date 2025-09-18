"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone, CheckCircle, Copy } from "lucide-react"

interface ContactModalProps {
  children: React.ReactNode
  title: string
  description: string
}

export function ContactModal({ children, title, description }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = {
    email: "vila.antoniojose@gmail.com",
    whatsapp: "+58 412 583 4984"
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me interesa el ${title.toLowerCase()}. ¿Podemos agendar una consulta?`)
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '').replace('+', '')}?text=${message}`, '_blank')
  }

  const openEmail = () => {
    const subject = encodeURIComponent(`Interés en ${title}`)
    const body = encodeURIComponent(`Hola,\n\nMe interesa conocer más sobre el ${title.toLowerCase()}.\n\n¿Podríamos agendar una consulta?\n\nSaludos.`)
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>
          <p className="text-muted-foreground mt-2">{description}</p>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          {/* WhatsApp Card */}
          <Card className="p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-800">WhatsApp</div>
                  <div className="text-sm text-green-600">{contactInfo.whatsapp}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(contactInfo.whatsapp, 'whatsapp')}
                  className="border-green-300 text-green-700 hover:bg-green-100"
                >
                  {copied === 'whatsapp' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Abrir
                </Button>
              </div>
            </div>
          </Card>

          {/* Email Card */}
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Email</div>
                  <div className="text-sm text-blue-600">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  {copied === 'email' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  onClick={openEmail}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
          <div className="text-center text-sm text-muted-foreground">
            <span className="font-semibold text-primary">💡 Respuesta garantizada</span> en menos de 2 horas durante horario laboral
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}